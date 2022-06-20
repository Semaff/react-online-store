const { Basket, Product, BasketProduct } = require("../models/models");
const AppError = require("../error/AppError");

class BasketController {
    async getOne(req, res, next) {
        try {
            const { id: userId } = req.user;
            const basket = await Basket.findOne({
                where: { userId },
                include: [
                    { model: Product, attributes: ["id", "name", "price"] }
                ]
            });

            return res.json(basket);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async append(req, res, next) {
        try {
            const { id: userId } = req.user;
            const { productId, quantity } = req.params;

            const basket = await Basket.findOne({
                where: { userId },
                include: [
                    { model: Product, attributes: ["id", "name", "price"] }
                ]
            });

            const basketProduct = await BasketProduct.findOne({ where: { basketId: basket.id, productId } });
            if (basketProduct) {
                await basketProduct.increment("quantity", { by: quantity });
            } else {
                await BasketProduct.create({ basketId: basket.id, productId, quantity });
            }

            await basket.reload();
            return res.json(basket);
        } catch (err) {
            next(AppError.badRequest(err.message))
        }
    }

    async increment(req, res, next) {
        try {
            const { id: userId } = req.user;
            const { productId, quantity } = req.params;

            const basket = await Basket.findOne({
                where: { userId },
                include: [
                    { model: Product, attributes: ["id", "name", "price"] }
                ]
            });

            const basketProduct = await BasketProduct.findOne({ where: { basketId: basket.id, productId } });
            if (basketProduct) {
                await basketProduct.increment('quantity', { by: quantity });
            } else {
                await BasketProduct.create({ basketId: basket.id, productId });
            }

            await basket.reload();
            return res.json(basket);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async decrement(req, res, next) {
        try {
            const { id: userId } = req.user;
            const { productId, quantity } = req.params;

            const basket = await Basket.findOne({
                where: { userId },
                include: [
                    { model: Product, attributes: ["id", "name", "price"] }
                ]
            });

            const basketProduct = await BasketProduct.findOne({ where: { basketId: basket.id, productId } });
            if (basketProduct) {
                if (basketProduct.quantity > quantity) {
                    await basketProduct.decrement('quantity', { by: quantity });
                } else {
                    await basketProduct.destroy();
                }
                await basket.reload();
            }

            return res.json(basket);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async remove(req, res, next) {
        try {
            const { id: userId } = req.user;
            const { productId } = req.params;

            const basket = await Basket.findOne({
                where: { userId },
                include: [
                    { model: Product, attributes: ["id", "name", "price"] }
                ]
            });

            const basketProduct = await BasketProduct.findOne({ where: { basketId: basket.id, productId } });
            if (basketProduct) {
                await basketProduct.destroy();
                await basket.reload();
            }

            return res.json(basket);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async clear(req, res, next) {
        try {
            const { id: userId } = req.user;

            const basket = await Basket.findOne({
                where: { userId },
                include: [
                    { model: Product, attributes: ["id", "name", "price"] }
                ]
            });
            if (basket) {
                await BasketProduct.destroy({ where: { basketId: basket.id } });
                await basket.reload();
            }

            return res.json(basket);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }
}

module.exports = new BasketController();