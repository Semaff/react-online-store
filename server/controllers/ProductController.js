const AppError = require("../error/AppError");
const { Product } = require("../models/models");
const uuid = require("uuid");
const path = require("path");

class ProductController {
    async getAll(req, res, next) {
        try {
            let { brandId, typeId, gender, limit, page } = req.query;
            let products;

            page = page || 1;
            limit = limit || 9;
            let offset = page * limit - limit;

            if (!brandId && !typeId && !gender) {
                products = await Product.findAndCountAll({ limit, offset });
                return res.json(products);
            }

            if (brandId && !typeId && !gender) {
                products = await Product.findAndCountAll({ where: { brandId }, limit, offset });
                return res.json(products);
            }

            if (!brandId && typeId && !gender) {
                products = await Product.findAndCountAll({ where: { typeId }, limit, offset });
                return res.json(products);
            }

            if (!brandId && !typeId && gender) {
                products = await Product.findAndCountAll({ where: { gender }, limit, offset });
                return res.json(products);
            }

            if (brandId && typeId && !gender) {
                products = await Product.findAndCountAll({ where: { brandId, typeId }, limit, offset });
                return res.json(products);
            }

            if (brandId && !typeId && gender) {
                products = await Product.findAndCountAll({ where: { brandId, gender }, limit, offset });
                return res.json(products);
            }

            if (!brandId && typeId && gender) {
                products = await Product.findAndCountAll({ where: { typeId, gender }, limit, offset });
                return res.json(products);
            }

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

            const { id } = req.params;
            const product = await Product.findOne({ where: { id } })
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
            let { name, price, description, gender, brandId = null, typeId = null } = req.body;
            const img = req.files.img;
            const [, ext] = img.mimetype.split('/');
            let fileName = uuid.v4() + "." + ext;
            img.mv(path.resolve(__dirname, "..", "static", fileName));
            const product = await Product.create({ name, price, description, gender, img: fileName, brandId, typeId });

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

            const product = await Product.findByPk(req.params.id);
            if (!product) {
                throw new Error('Product was not found')
            }

            const img = req.files.img;
            let fileName;
            if (img) {
                const [, ext] = img.mimetype.split('/');
                fileName = uuid.v4() + "." + ext;
                img.mv(path.resolve(__dirname, "..", "static", fileName));
            }

            const name = req.body.name || product.name;
            const price = req.body.price || product.price;
            const description = req.body.description || product.description;
            const newImg = fileName || req.product.img;
            await product.update({ name, price, description, img: newImg });
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

            const product = await Product.findByPk(req.params.id);
            if (!product) {
                throw new Error('Product was not found')
            }

            await product.destroy();
            return res.json(product);
        } catch (err) {
            next(AppError.badRequest(err.message))
        }
    }
}

module.exports = new ProductController();