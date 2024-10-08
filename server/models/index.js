const { DataTypes } = require("sequelize");

const sequelize = require("../db");

/* =========================
  User/Product/Basket
  ====================== */
const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Product = sequelize.define("product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  isNew: { type: DataTypes.BOOLEAN, defaultValue: true },

  salePrice: { type: DataTypes.INTEGER },
  onASale: { type: DataTypes.BOOLEAN, defaultValue: false },

  gender: { type: DataTypes.STRING }, // MEN / WOMEN
  sizes: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false }, // XL, L, S, ..
  colors: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false }, // #ffffff, #000000, ..
  quantity: { type: DataTypes.INTEGER, defaultValue: 0 },

  rating: { type: DataTypes.FLOAT, defaultValue: 0 },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketProduct = sequelize.define("basket_product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
});

const BasketFavorite = sequelize.define("basket_favorite", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

/* Connection: Product and Basket */
Basket.belongsToMany(Product, { through: BasketProduct, as: "products", onDelete: "CASCADE" });
Product.belongsToMany(Basket, { through: BasketProduct, as: "products", onDelete: "CASCADE" });

Basket.belongsToMany(Product, { through: BasketFavorite, as: "favorites", onDelete: "CASCADE" });
Product.belongsToMany(Basket, { through: BasketFavorite, as: "favorites", onDelete: "CASCADE" });

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Basket.hasMany(BasketFavorite);
BasketFavorite.belongsTo(Basket);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Product.hasMany(BasketFavorite);
BasketFavorite.belongsTo(Product);

/* Connection: User and Basket */
User.hasOne(Basket);
Basket.belongsTo(User);

/* =========================
  Other
  ====================== */
const Category = sequelize.define("category", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING },
  amount: { type: DataTypes.INTEGER, defaultValue: 0 },
});

const Brand = sequelize.define("brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  rate: { type: DataTypes.INTEGER, allowNull: false },
});

const CategoryBrand = sequelize.define("category_brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Testimonial = sequelize.define("testimonial", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  img: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  profession: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.STRING, allowNull: false },
});

/* Connection: Rating */
User.hasMany(Rating);
Rating.belongsTo(User);

Product.hasMany(Rating);
Rating.belongsTo(Product);

/* Connection: Category and Brand */
Category.hasMany(Product);
Product.belongsTo(Category);

Brand.hasMany(Product);
Product.belongsTo(Brand);

Category.belongsToMany(Brand, { through: CategoryBrand });
Brand.belongsToMany(Category, { through: CategoryBrand });

module.exports = {
  User,
  Basket,
  BasketProduct,
  BasketFavorite,
  Product,
  Category,
  Brand,
  CategoryBrand,
  Rating,
  Testimonial,
};
