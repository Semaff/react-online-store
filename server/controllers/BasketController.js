const { Basket, Product, BasketProduct, BasketFavorite } = require("../models");
const AppError = require("../error/AppError");

const findBasket = async (userId) => {
  return await Basket.findOne({
    where: { userId },
    include: [
      { model: Product, order: ["createdAt", "ASC"], as: "products" },
      { model: Product, order: ["createdAt", "ASC"], as: "favorites" },
    ],
  });
};

const incrementProduct = async (basket, product, quantity) => {
  const basketId = basket.id;
  const productId = product.id;

  const basketProduct = await BasketProduct.findOne({
    where: { basketId, productId },
  });

  if (basketProduct) {
    await basketProduct.increment("quantity", { by: quantity });
  } else {
    await BasketProduct.create({ basketId, productId, quantity });
  }

  await product.update({ quantity: product.quantity - quantity });

  await basket.reload();
};

const checkProductAvailability = async (product) => {
  if (!product) {
    throw new Error("Product was not found");
  }

  if (product.quantity < quantity || quantity <= 0) {
    throw new Error("This amount of product is unavailable");
  }

  return true;
};

class BasketController {
  async getOne(req, res, next) {
    try {
      const { id: userId } = req.user;

      const basket = await findBasket(userId);

      return res.json(basket);
    } catch (err) {
      next(AppError.badRequest(err.message));
    }
  }

  async toggleFavorite(req, res, next) {
    try {
      const { id: userId } = req.user;
      const { productId } = req.params;

      /* Check product's availability */
      const product = await Product.findByPk(productId);

      checkProductAvailability(product);

      /* Delete/Create favorite */
      const basket = await findBasket(userId);

      const basketFavorite = await BasketFavorite.findOne({
        where: { basketId: basket.id, productId },
      });

      if (basketFavorite) {
        await basketFavorite.destroy();
      } else {
        await BasketFavorite.create({ basketId: basket.id, productId });
      }

      await basket.reload();
      return res.json(basket);
    } catch (err) {
      next(AppError.badRequest(err.message));
    }
  }

  async append(req, res, next) {
    try {
      const { id: userId } = req.user;
      const { productId, quantity } = req.params;

      /* Check product's availability */
      const product = await Product.findByPk(productId);

      checkProductAvailability(product);

      /* Create/Update basket-product */
      const basket = await findBasket(userId);

      incrementProduct(basket, product, quantity);

      return res.json(basket);
    } catch (err) {
      next(AppError.badRequest(err.message));
    }
  }

  async increment(req, res, next) {
    try {
      const { id: userId } = req.user;
      const { productId, quantity } = req.params;

      /* Check product's availability */
      const product = await Product.findByPk(productId);

      checkProductAvailability(product);

      /* Increment */
      const basket = await findBasket(userId);

      incrementProduct(basket, product, quantity);

      return res.json(basket);
    } catch (err) {
      next(AppError.badRequest(err.message));
    }
  }

  async decrement(req, res, next) {
    try {
      const { id: userId } = req.user;
      const { productId, quantity } = req.params;

      const product = await Product.findByPk(productId);

      if (quantity <= 0) {
        throw new Error("Wrong amount of quantity");
      }

      /* Decrement\Destroy */
      const basket = await findBasket(userId);

      const basketProduct = await BasketProduct.findOne({
        where: { basketId: basket.id, productId },
      });

      if (basketProduct) {
        if (basketProduct.quantity > quantity) {
          await product.update({ quantity: +product.quantity + +quantity });
          await basketProduct.decrement("quantity", { by: quantity });
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

      const product = await Product.findByPk(productId);

      /* Remove */
      const basket = await findBasket(userId);

      const basketProduct = await BasketProduct.findOne({
        where: { basketId: basket.id, productId },
      });

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

      const basket = await findBasket(userId);

      /* Return quantities to products */
      const basketProducts = await BasketProduct.findAll({ where: { basketId: basket.id } });

      basketProducts.forEach(async (basketProduct) => {
        let product = await Product.findByPk(basketProduct.productId);
        await product.update({ quantity: +product.quantity + +basketProduct.quantity });
      });

      /* Clear */
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
