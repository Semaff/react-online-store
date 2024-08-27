const { Basket, Product, BasketProduct, BasketFavorite } = require("../models");

class BasketService {
  async get(userId) {
    return await Basket.findOne({
      where: { userId },
      include: [
        { model: Product, order: ["createdAt", "ASC"], as: "products" },
        { model: Product, order: ["createdAt", "ASC"], as: "favorites" },
      ],
    });
  }

  /* =========================
    Products
    ==================== */
  async #checkProductAvailability(product, { checkForOutOfSale = false }) {
    if (!product) return false;

    if (checkForOutOfSale) return product.quantity <= 0;

    return true;
  }

  async #incrementProduct(basket, product, quantity) {
    let basketProduct = await BasketProduct.findOne({
      where: { basketId: basket.id, productId: product.id },
    });

    if (!basketProduct) {
      basketProduct = await BasketProduct.create({ basketId: basket.id, productId: product.id });
    }

    await basketProduct.increment("quantity", { by: quantity });

    await product.update({ quantity: product.quantity - quantity });

    await basket.reload();
  }

  async #validateProduct(productId) {
    const product = await Product.findByPk(productId);

    if (!this.#checkProductAvailability(product, { checkForOutOfSale: true })) {
      throw new Error("Product out of sale");
    }

    return product;
  }

  async addProduct(userId, productId, quantity = 1) {
    const basket = await this.get(userId);

    const product = await this.#validateProduct(productId);

    this.#incrementProduct(
      basket,
      product,
      product.quantity < quantity ? product.quantity : quantity,
    );

    return basket;
  }

  async removeProduct(userId, productId, quantity) {
    /* Check product availability */
    const product = await Product.findByPk(productId);

    if (!product) {
      throw new Error("Product doesn't exist");
    }

    /* Decrement\Remove */
    const basket = await this.get(userId);

    const basketProduct = await BasketProduct.findOne({
      where: { basketId: basket.id, productId },
    });

    if (!basketProduct) {
      throw new Error("Product wasn't found in basket!");
    }

    let deltaQuantity;

    if (quantity && basketProduct.quantity > quantity) {
      deltaQuantity = +product.quantity + +quantity;

      await basketProduct.decrement("quantity", { by: quantity });
    } else {
      deltaQuantity = +product.quantity + +basketProduct.quantity;

      await basketProduct.destroy();
    }

    await product.update({ quantity: deltaQuantity });

    await basket.reload();

    return basket;
  }

  /* Doesn't affect favorite products */
  async clear(userId) {
    const basket = await this.get(userId);

    /* Return quantities to products */
    const basketProducts = await BasketProduct.findAll({ where: { basketId: basket.id } });

    basketProducts.forEach(async (basketProduct) => {
      const product = await Product.findByPk(basketProduct.productId);

      await product.update({ quantity: +product.quantity + +basketProduct.quantity });
    });

    /* And then clear */
    await BasketProduct.destroy({ where: { basketId: basket.id } });

    await basket.reload();

    return basket;
  }

  /* =========================
    Favorite Products
    ==================== */
  async toggleFavoriteProduct(userId, productId) {
    /* Check product's availability */
    const product = await Product.findByPk(productId);

    if (!product) {
      throw new Error("Product doesn't exist");
    }

    /* Delete/Create favorite */
    const basket = await this.get(userId);

    const basketFavorite = await BasketFavorite.findOne({
      where: { basketId: basket.id, productId },
    });

    if (!basketFavorite) {
      await BasketFavorite.create({ basketId: basket.id, productId });
    } else {
      await basketFavorite.destroy();
    }

    await basket.reload();

    return basket;
  }
}

module.exports = new BasketService();
