const AppError = require("../error/AppError");
const { Category, Brand } = require("../models/models");

class CategoryController {
    async getAll(req, res, next) {
        try {
            const categories = await Category.findAll({
                include: [{ model: Brand }]
            });
            return res.json(categories);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const category = await Category.findOne({
                where: { id: req.params.id },
                include: [{ model: Brand }]
            });
            if (!category) {
                throw new Error('Category does not exist');
            }

            return res.json(category);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async create(req, res, next) {
        try {
            if (!req.body.name) {
                throw new Error("Can't create Category without name")
            }

            const category = await Category.create({ name: req.body.name });
            return res.json(category);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }

    }

    async update(req, res, next) {
        try {
            const category = await Category.findOne({
                where: { id: req.params.id },
                include: [{ model: Brand }]
            });
            if (!category) {
                throw new Error('Category does not exist!');
            }

            const name = req.body.name || category.name;
            await category.update({ name });
            return res.json(category);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async delete(req, res, next) {
        try {
            const category = await Category.findOne({
                where: { id: req.params.id },
                include: [{ model: Brand }]
            });
            if (!category) {
                throw new Error('Category does not exist');
            }

            await category.destroy();
            return res.json(category);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }
}

module.exports = new CategoryController();