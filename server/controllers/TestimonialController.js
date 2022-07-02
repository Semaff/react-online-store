const { Testimonial } = require("../models/models");
const AppError = require("../error/AppError");
const uuid = require("uuid");
const path = require("path");

class TestimonialController {
    async getAll(req, res, next) {
        try {
            const testimonials = await Testimonial.findAll();
            return res.json(testimonials);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const testimonial = await Testimonial.findByPk(req.params.id);
            if (!testimonial) {
                throw new Error('Testimonial does not found!');
            }

            return res.json(testimonial);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async create(req, res, next) {
        try {
            const { name, profession, content } = req.body;

            // Parse Img
            const img = req.files?.img;
            const [, ext] = img.mimetype.split('/');
            let fileName = uuid.v4() + "." + ext;
            img.mv(path.resolve(__dirname, "..", "static", fileName));

            // Create Testimonial
            const testimonial = await Testimonial.create({ img: fileName, name, profession, content });
            return res.json(testimonial);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async update(req, res, next) {
        try {
            const testimonial = await Testimonial.findByPk(req.params.id);
            if (!testimonial) {
                throw new Error('Testimonial does not found!');
            }

            // Update or not columns
            const name = req.body.name || testimonial.name;
            const profession = req.body.profession || testimonial.profession;
            const content = req.body.content || testimonial.content;

            // Parse Img
            const img = req.files?.img;
            let fileName;
            if (img) {
                const [, ext] = img.mimetype.split('/');
                fileName = uuid.v4() + "." + ext;
                img.mv(path.resolve(__dirname, "..", "static", fileName));
            }
            let newImg = fileName || testimonial.img;

            await testimonial.update({ name, profession, content, img: newImg });
            return res.json(testimonial);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async delete(req, res, next) {
        try {
            const testimonial = await Testimonial.findByPk(req.params.id);
            if (!testimonial) {
                throw new Error('Testimonial does not found');
            }

            await testimonial.destroy();
            return res.json(testimonial);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }
}

module.exports = new TestimonialController();