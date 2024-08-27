const { AppError } = require("../errors");

const BasketService = require("../services/BasketService");

class BasketController {
  async get(req, res, next) {
    try {
      const { id: userId } = req.user;

      const basket = await BasketService.get(userId);

      return res.json(basket);
    } catch (err) {
      next(AppError.badRequest(err.message));
    }
  }

  async addProduct(req, res, next) {
    try {
      const { id: userId } = req.user;
      const { productId, quantity } = req.params;

      const basket = await BasketService.addProduct(userId, productId, quantity);

      return res.json(basket);
    } catch (err) {
      next(AppError.badRequest(err.message));
    }
  }

  async removeProduct(req, res, next) {
    try {
      const { id: userId } = req.user;
      const { productId, quantity } = req.params;

      const basket = await BasketService.removeProduct(userId, productId, quantity);

      return res.json(basket);
    } catch (err) {
      next(AppError.badRequest(err.message));
    }
  }

  async clear(req, res, next) {
    try {
      const { id: userId } = req.user;

      const basket = await BasketService.clear(userId);

      return res.json(basket);
    } catch (err) {
      next(AppError.badRequest(err.message));
    }
  }

  async toggleFavoriteProduct(req, res, next) {
    try {
      const { id: userId } = req.user;
      const { productId } = req.params;

      const basket = await BasketService.toggleFavoriteProduct(userId, productId);

      return res.json(basket);
    } catch (err) {
      next(AppError.badRequest(err.message));
    }
  }
}

module.exports = new BasketController();
