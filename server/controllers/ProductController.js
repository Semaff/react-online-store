const AppError = require("../error/AppError");
const { Product, Category } = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const { Op } = require("sequelize");

async function findAllProducts({ brandId, categoryId, gender, size, color, limit, offset, order, price }) {
    // Where Statements
    let whereStatements = {};

    if (+brandId) whereStatements.brandId = brandId;
    if (+categoryId) whereStatements.categoryId = categoryId;
    if (gender) whereStatements.gender = gender;

    if (size) whereStatements.sizes = {
        [Op.contains]: size.split("%").filter(sizeEl => sizeEl !== "")
    }

    if (color) whereStatements.colors = {
        [Op.contains]: color.split("%").filter(colorEl => colorEl !== "").map(colorEl => `#${colorEl}`)
    }

    if (price) whereStatements.price = {
        [Op.gte]: price
    }

    // Order statements
    let orderStatements = [];
    if (+order === 1) {
        orderStatements.push(["price", "ASC"])
    } else if (+order === 2) {
        orderStatements.push(["price", "DESC"])
    } else if (+order === 3) {
        orderStatements.push(["updatedAt", "DESC"])
    } else if (+order === 4) {
        whereStatements.isNew = true;
    } else if (+order === 5) {
        whereStatements.onASale = true;
    }

    const products = await Product.findAndCountAll({
        limit, offset, where: whereStatements, order: orderStatements
    });

    return products;
}

class ProductController {
    async getAll(req, res, next) {
        try {
            let { brandId, categoryId, gender, size, color, limit, page, order, getall, price } = req.query;

            // Check what offset we need to send
            let offset;
            if (getall === "true") {
                limit = undefined;
                page = undefined;
                offset = undefined;
            } else {
                limit = limit || 12;
                page = page || 1;
                offset = page * limit - limit
            }

            /*
              Check what filters are used
            */
            const products = await findAllProducts({ brandId, categoryId, gender, size, color, limit, offset, order, price })
            return res.json(products);
        } catch (err) {
            next(AppError.badRequest(err.message))
        }
    }

    async getOne(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Wrong id!');
            }

            // Find Product by productId
            const product = await Product.findByPk(req.params.id)
            if (!product) {
                throw new Error('Product was not found');
            }

            return res.json(product);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async create(req, res, next) {
        try {
            let {
                name,
                price,
                description,
                gender,
                colors,
                sizes,
                quantity,
                brandId = null,
                categoryId = null
            } = req.body;

            // Parse Img
            const img = req.files.img;
            const [, ext] = img.mimetype.split('/');
            let fileName = uuid.v4() + "." + ext;
            img.mv(path.resolve(__dirname, "..", "static", fileName));

            // Parse colors and sizes
            const arrayOfColors = colors.split(", ");
            const arrayOfSizes = sizes.split(", ");

            // Create product
            const product = await Product.create({
                name,
                price: +price,
                description,
                gender,
                sizes: arrayOfSizes,
                colors: arrayOfColors,
                img: fileName,
                quantity,
                brandId,
                categoryId
            });

            // Increment Category amount
            if (categoryId) {
                const category = await Category.findByPk(categoryId);
                category.increment("amount", { by: 1 });
            }

            return res.json(product);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async update(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Wrong id!');
            }

            // Find Product by productId and check for existence
            const product = await Product.findByPk(req.params.id);
            if (!product) {
                throw new Error('Product was not found')
            }

            // Parse Img
            const img = req.files?.img;
            let fileName;
            if (img) {
                const [, ext] = img.mimetype.split('/');
                fileName = uuid.v4() + "." + ext;
                img.mv(path.resolve(__dirname, "..", "static", fileName));
            }

            // Parse colors and sizes
            let arrayOfColors;
            let arrayOfSizes;
            if (req.body.colors) {
                arrayOfColors = req.body.colors.split(", ");
            } else {
                arrayOfColors = product.colors;
            }
            if (req.body.sizes) {
                arrayOfSizes = req.body.sizes.split(", ");
            } else {
                arrayOfSizes = product.sizes;
            }

            // Update or not information about product
            const name = req.body.name || product.name;
            const price = req.body.price || product.price;
            const description = req.body.description || product.description;
            const quantity = req.body.quantity || product.quantity;
            const gender = req.body.gender || product.gender;

            const newColors = arrayOfColors || product.colors;
            const newSizes = arrayOfSizes || product.sizes;

            const newImg = fileName || product.img;

            // Parse Sale price
            let onASale;
            let salePrice;
            if (req.body.onASale === "false") {
                onASale = false;
                salePrice = null;
            } else if (req.body.onASale === "true") {
                onASale = true;
                salePrice = req.body.salePrice;
            } else {
                onASale = product.onASale;
                salePrice = product.salePrice;
            }

            // Update product
            await product.update({
                name,
                price,

                isNew: false,
                onASale,
                salePrice,

                description,
                quantity,
                gender,
                img: newImg,
                colors: newColors,
                sizes: newSizes
            });
            return res.json(product);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async delete(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Wrong id');
            }

            // Find Product by productId
            const product = await Product.findByPk(req.params.id);
            if (!product) {
                throw new Error('Product was not found')
            }

            const categoryId = product.categoryId;

            // Destroy Product
            await product.destroy();

            // Decrement Category amount
            const category = await Category.findByPk(categoryId);
            category.decrement("amount", { by: 1 });

            return res.json(product);
        } catch (err) {
            next(AppError.badRequest(err.message))
        }
    }
}

module.exports = new ProductController();