const { CategoryBrand } = require("../models");

const { AppError } = require("../errors");

class CategoryBrandController {
  async getAll(req, res, next) {
    try {
      const { categoryId } = req.params;

      const categoryBrands = await CategoryBrand.findAll({ where: { categoryId } });

      return res.json(categoryBrands);
    } catch (err) {
      next(AppError.badRequest(err.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const { categoryId, brandId } = req.params;

      const categoryBrand = await CategoryBrand.findOne({ where: { categoryId, brandId } });

      return res.json(categoryBrand);
    } catch (err) {
      next(AppError.badRequest(err.message));
    }
  }

  async create(req, res, next) {
    try {
      const { categoryId, brandId } = req.params;

      const categoryBrand = await CategoryBrand.create({ categoryId, brandId });

      return res.json(categoryBrand);
    } catch (err) {
      next(AppError.badRequest(err.message));
    }
  }

  async delete(req, res, next) {
    try {
      const { categoryId, brandId } = req.params;

      const categoryBrand = await CategoryBrand.findOne({ where: { categoryId, brandId } });

      if (!categoryBrand) {
        throw new Error("Brand in this category does not exist");
      }

      await categoryBrand.destroy();

      return res.json(categoryBrand);
    } catch (err) {
      next(AppError.badRequest(err.message));
    }
  }
}

module.exports = new CategoryBrandController();
