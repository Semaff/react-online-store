const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = sequelize.define("basket", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

const BasketProduct = sequelize.define("basket_product", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantity: { type: DataTypes.INTEGER, defaultValue: 1 }
});

const BasketFavourite = sequelize.define("basket_favourite", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

const Product = sequelize.define("product", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    isNew: { type: DataTypes.BOOLEAN, defaultValue: true },

    salePrice: { type: DataTypes.INTEGER },
    onASale: { type: DataTypes.BOOLEAN, defaultValue: false },

    gender: { type: DataTypes.STRING }, // men \ women
    sizes: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false }, // XL, L, S, ..
    colors: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false }, // #ffffff, #000000, ..
    quantity: { type: DataTypes.INTEGER, defaultValue: 0 },

    rating: { type: DataTypes.FLOAT, defaultValue: 0 },
    img: { type: DataTypes.STRING, allowNull: false }
});

const Category = sequelize.define('category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING },
    amount: { type: DataTypes.INTEGER, defaultValue: 0 }
});

const Brand = sequelize.define('brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = sequelize.define('rating', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    rate: { type: DataTypes.INTEGER, allowNull: false },
});

const CategoryBrand = sequelize.define('category_brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Testimonial = sequelize.define("testimonial", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    img: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    profession: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false }
})


// Basket and Product (BasketProduct / BasketFavourite)
Basket.belongsToMany(Product, { through: BasketProduct, as: "products", onDelete: "CASCADE" });
Product.belongsToMany(Basket, { through: BasketProduct, as: "products", onDelete: "CASCADE" });

Basket.belongsToMany(Product, { through: BasketFavourite, as: "favourites", onDelete: "CASCADE" });
Product.belongsToMany(Basket, { through: BasketFavourite, as: "favourites", onDelete: "CASCADE" });

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Basket.hasMany(BasketFavourite);
BasketFavourite.belongsTo(Basket);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Product.hasMany(BasketFavourite);
BasketFavourite.belongsTo(Product);

// User and Basket
User.hasOne(Basket);
Basket.belongsTo(User);

// Rating
User.hasMany(Rating);
Rating.belongsTo(User);

Product.hasMany(Rating);
Rating.belongsTo(Product);

// Category
Category.hasMany(Product);
Product.belongsTo(Category);

// Brands
Brand.hasMany(Product);
Product.belongsTo(Brand);

// TypeBrands
Category.belongsToMany(Brand, { through: CategoryBrand });
Brand.belongsToMany(Category, { through: CategoryBrand });

module.exports = {
    User,
    Basket,
    BasketProduct,
    BasketFavourite,
    Product,
    Category,
    Brand,
    CategoryBrand,
    Rating,
    Testimonial
}