const AppError = require("../error/AppError");
const { Product, Rating, User } = require("../models/models");

class RatingController {
    async getOne(req, res, next) {
        try {
            const product = await Product.findByPk(req.params.productId);
            if (!product) {
                throw new Error('Product was not found');
            }

            const votes = await Rating.count({ where: { productId: req.params.productId } });
            if (votes) {
                const rates = await Rating.sum('rate', { where: { productId: req.params.productId } });
                return res.json({ rates, votes, rating: rates / votes });
            } else {
                return res.json({ rates: 0, votes: 0, rating: 0 });
            }
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async create(req, res, next) {
        try {
            const { productId, rate } = req.params;
            const product = await Product.findByPk(productId);
            if (!product) {
                throw new Error('Product was not found');
            }

            const user = await User.findByPk(req.user.id);
            if (!user) {
                throw new Error('User does not exist');
            }

            let rating = await Rating.findOne({ where: { userId: req.user.id, productId } });
            if (rating) {
                throw new Error("You are already voted for this product!");
            } else {
                rating = await Rating.create({ userId: req.user.id, productId, rate });
            }

            return res.json(rating);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }
}

module.exports = new RatingController();