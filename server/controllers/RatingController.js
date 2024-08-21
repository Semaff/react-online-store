const AppError = require("../error/AppError");
const { Product, Rating } = require("../models/models");

class RatingController {
  async getOne(req, res, next) {
    try {
      let { limit, page } = req.query;

      const product = await Product.findByPk(req.params.productId);
      if (!product) {
        throw new Error("Product was not found");
      }

      limit = limit || 8;
      page = page || 1;
      let offset = page * limit - limit;

      const votes = await Rating.count({ where: { productId: req.params.productId } });
      const ratings = await Rating.findAndCountAll({
        offset,
        limit,
        where: {
          productId: req.params.productId,
        },
      });

      if (!votes) {
        return res.json({ ratings, rates: 0, votes: 0, rating: 0 });
      } else {
        const rates = await Rating.sum("rate", { where: { productId: req.params.productId } });
        return res.json({ ratings, rates, votes, rating: rates / votes });
      }
    } catch (err) {
      next(AppError.badRequest(err.message));
    }
  }

  async create(req, res, next) {
    try {
      const { productId, rate } = req.params;
      const { name, description } = req.body;

      const product = await Product.findByPk(productId);
      if (!product) {
        throw new Error("Product was not found");
      }

      let rating = await Rating.findOne({ where: { userId: req.user.id, productId } });
      if (rating) {
        throw new Error("You are already voted for this product!");
      } else {
        rating = await Rating.create({ userId: req.user.id, productId, rate, name, description });
      }

      const votes = await Rating.count({ where: { productId: productId } });
      const rates = await Rating.sum("rate", { where: { productId: productId } });
      await product.update({ rating: rates / votes });
      return res.json(rating);
    } catch (err) {
      next(AppError.badRequest(err.message));
    }
  }
}

module.exports = new RatingController();
