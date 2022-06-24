const { Basket, Product, BasketProduct, BasketFavourite } = require("../models/models");
const AppError = require("../error/AppError");

class BasketController {
    async getOne(req, res, next) {
        try {
            const { id: userId } = req.user;

            // Find Basket by userId with inner Products
            const basket = await Basket.findOne({
                where: { userId },
                include: [
                    { model: Product, as: "products", attributes: ["id", "img", "name", "price"] },
                    { model: Product, as: "favourites", attributes: ["id", "img", "name", "price"] }
                ]
            });

            return res.json(basket);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async toggleFavourite(req, res, next) {
        try {
            const { id: userId } = req.user;
            const { productId } = req.params;

            // Find Product by productId and check it's quantity
            const product = await Product.findByPk(productId);
            if (!product) {
                throw new Error("Product was not found")
            }

            // Find Basket by userId with inner Products
            const basket = await Basket.findOne({
                where: { userId },
                include: [
                    { model: Product, as: "favourites", attributes: ["id", "img", "name", "price"] }
                ]
            });

            // Delete or create favourite BasketFavourite
            const basketFavourite = await BasketFavourite.findOne({ where: { basketId: basket.id, productId } });
            if (basketFavourite) {
                await basketFavourite.destroy();
            } else {
                await BasketFavourite.create({ basketId: basket.id, productId });
            }

            await basket.reload();
            return res.json(basket);
        } catch (err) {
            next(AppError.badRequest(err.message))
        }
    }

    async append(req, res, next) {
        try {
            const { id: userId } = req.user;
            const { productId, quantity } = req.params;

            // Find Product by productId and check it's quantity
            const product = await Product.findByPk(productId);
            if (!product) {
                throw new Error("Product was not found")
            }
            if (product.quantity < quantity || quantity <= 0) {
                throw new Error("This amount of product is unavailable")
            }

            // Find Basket by userId with inner Products
            const basket = await Basket.findOne({
                where: { userId },
                include: [
                    { model: Product, as: "products", attributes: ["id", "img", "name", "price"] }
                ]
            });

            // Increment or Update basketProduct
            const basketProduct = await BasketProduct.findOne({ where: { basketId: basket.id, productId } });
            if (basketProduct) {
                await basketProduct.increment("quantity", { by: quantity });
            } else {
                await BasketProduct.create({ basketId: basket.id, productId, quantity });
            }
            await product.update({ quantity: product.quantity - quantity });

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

            // Find Product by productId and check it's quantity
            const product = await Product.findByPk(productId);
            if (!product) {
                throw new Error("Product was not found")
            }
            if (product.quantity < quantity || quantity <= 0) {
                throw new Error("This amount of product is unavailable")
            }

            // Find Basket by userId with inner Products
            const basket = await Basket.findOne({
                where: { userId },
                include: [
                    { model: Product, as: "products", attributes: ["id", "img", "name", "price"] }
                ]
            });

            // Increment BasketProduct
            const basketProduct = await BasketProduct.findOne({ where: { basketId: basket.id, productId } });
            if (basketProduct) {
                await basketProduct.increment('quantity', { by: quantity });
            } else {
                await BasketProduct.create({ basketId: basket.id, productId, quantity });
            }
            await product.update({ quantity: product.quantity - quantity });

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

            // Find Product by productId
            const product = await Product.findByPk(productId);
            if (quantity <= 0) {
                throw new Error("Wrong amount of quantity")
            }

            // Find Basket by userId with inner Products
            const basket = await Basket.findOne({
                where: { userId },
                include: [
                    { model: Product, as: "products", attributes: ["id", "img", "name", "price"] }
                ]
            });

            // Decrement BasketProduct or destroy it
            const basketProduct = await BasketProduct.findOne({ where: { basketId: basket.id, productId } });
            if (basketProduct) {
                if (basketProduct.quantity > quantity) {
                    await product.update({ quantity: +product.quantity + +quantity });
                    await basketProduct.decrement('quantity', { by: quantity });
                } else {
                    await product.update({ quantity: +product.quantity + +basketProduct.quantity });
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

            // Find Product by productId
            const product = await Product.findByPk(productId);

            // Find Basket by userId with inner Products
            const basket = await Basket.findOne({
                where: { userId },
                include: [
                    { model: Product, as: "products", attributes: ["id", "img", "name", "price"] }
                ]
            });

            // Delete BasketProduct
            const basketProduct = await BasketProduct.findOne({ where: { basketId: basket.id, productId } });
            if (basketProduct) {
                await product.update({ quantity: +product.quantity + +basketProduct.quantity });
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

            // Find Basket by userId with inner Products
            const basket = await Basket.findOne({
                where: { userId },
                include: [
                    { model: Product, as: "products", attributes: ["id", "img", "name", "price"] },
                    { model: Product, as: "favourites", attributes: ["id", "img", "name", "price"] }
                ]
            });

            // Turn back quantities to products
            const basketProducts = await BasketProduct.findAll({ where: { basketId: basket.id } });
            basketProducts.forEach(async (basketProduct) => {
                let product = await Product.findByPk(basketProduct.productId);
                await product.update({ quantity: +product.quantity + +basketProduct.quantity });
            });

            // Clear basket
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