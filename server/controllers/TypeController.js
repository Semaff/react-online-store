const AppError = require("../error/AppError");
const { Type } = require("../models/models");

class TypeController {
    async getAll(req, res, next) {
        try {
            const types = await Type.findAll();
            return res.json(types);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }

    }

    async getOne(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Wrong id!');
            };

            const type = await Type.findByPk(req.params.id);
            if (!type) {
                throw new Error('Type does not exist');
            }

            return res.json(type);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async create(req, res, next) {
        try {
            if (!req.body.name) {
                throw new Error("Can't create type without name")
            }

            const type = await Type.create({ name: req.body.name });
            return res.json(type);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }

    }

    async update(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Wrong id!');
            }

            const type = await Type.findByPk(req.params.id);
            if (!type) {
                throw new Error('Type does not exist!');
            }

            const name = req.body.name || type.name;
            await type.update({ name });
            return res.json(type);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async delete(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Wrong id!');
            }

            const type = await Type.findByPk(req.params.id);
            if (!type) {
                throw new Error('Type does not exist');
            }

            await type.destroy();
            return res.json(type);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }
}

module.exports = new TypeController();