const { Brand } = require("../models/models");
const AppError = require("../error/AppError");

class BrandController {
    async getAll(req, res, next) {
        try {
            const brands = await Brand.findAll();
            return res.json(brands);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const brand = await Brand.findByPk(req.params.id);
            if (!brand) {
                throw new Error('Brand does not found!');
            }

            return res.json(brand);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async create(req, res, next) {
        try {
            if (!req.body.name) {
                throw new Error("Can't create brand without a name")
            }

            const brand = await Brand.create({ name: req.body.name });
            return res.json(brand);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async update(req, res, next) {
        try {
            const brand = await Brand.findByPk(req.params.id);
            if (!brand) {
                throw new Error('Brand does not found!');
            }

            const name = req.body.name || brand.name;
            await brand.update({ name });
            return res.json(brand);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async delete(req, res, next) {
        try {
            const brand = await Brand.findByPk(req.params.id);
            if (!brand) {
                throw new Error('Brand does not found');
            }

            await brand.destroy();
            return res.json(brand);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }
}

module.exports = new BrandController();