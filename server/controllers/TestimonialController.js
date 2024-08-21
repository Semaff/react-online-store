const { Testimonial } = require("../models");

const { AppError } = require("../errors");

const parseImg = require("../utils/parseImg");

class TestimonialController {
  async getAll(_, res, next) {
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
        throw new Error("Testimonial does not found!");
      }

      return res.json(testimonial);
    } catch (err) {
      next(AppError.badRequest(err.message));
    }
  }

  async create(req, res, next) {
    try {
      const { name, profession, content } = req.body;

      const fileName = await parseImg(req.files?.img);

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
        throw new Error("Testimonial wasn't found!");
      }

      const fileName = await parseImg(req.files?.img);

      const name = req.body.name || testimonial.name;
      const profession = req.body.profession || testimonial.profession;
      const content = req.body.content || testimonial.content;

      const img = fileName || testimonial.img;

      await testimonial.update({ name, profession, content, img });

      return res.json(testimonial);
    } catch (err) {
      next(AppError.badRequest(err.message));
    }
  }

  async delete(req, res, next) {
    try {
      const testimonial = await Testimonial.findByPk(req.params.id);

      if (!testimonial) {
        throw new Error("Testimonial does not found");
      }

      await testimonial.destroy();

      return res.json(testimonial);
    } catch (err) {
      next(AppError.badRequest(err.message));
    }
  }
}

module.exports = new TestimonialController();
