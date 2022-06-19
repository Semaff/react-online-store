const sequelize = require("../db");
const DataTypes = require("sequelize");

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false }
});

const Basket = sequelize.define("basket", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

const BasketProduct = sequelize.define("basket_product", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantity: { type: DataTypes.INTEGER, defaultValue: 1 }
});

const Product = sequelize.define("product", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.STRING, allowNull: false },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
    gender: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING, allowNull: false }
});

const Type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Brand = sequelize.define('brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = sequelize.define('rating', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rate: { type: DataTypes.INTEGER, allowNull: false },
});

const TypeBrand = sequelize.define('type_brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

Basket.belongsToMany(Product, { through: BasketProduct, onDelete: "CASCADE" });
Product.belongsToMany(Basket, { through: BasketProduct, onDelete: "CASCADE" });

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Type.hasMany(Product);
Product.belongsTo(Type);

Brand.hasMany(Product);
Product.belongsTo(Brand);

Product.hasMany(Rating);
Rating.belongsTo(Product);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Type.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(Type, { through: TypeBrand });

module.exports = {
    User,
    Basket,
    BasketProduct,
    Product,
    Type,
    Brand,
    TypeBrand,
    Rating
}