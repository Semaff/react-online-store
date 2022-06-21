const AppError = require("../error/AppError");
const { Product } = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const { Op } = require("sequelize");

class ProductController {
    async getAll(req, res, next) {
        try {
            let { brandId, typeId, gender, limit, page, size, color } = req.query;
            let products;

            // Check what offset we need to send
            page = page || 1;
            limit = limit || 9;
            let offset = page * limit - limit;

            /*
              Check what filters are used
            */

            // Find Products
            if (!brandId && !typeId && !gender) {

                // Find Products including sizes column
                if (size && !color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            sizes: {
                                [Op.contains]: [size]
                            }
                        }
                    });

                    return res.json(products);
                }

                // Find Products including colors column
                if (!size && color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            colors: {
                                [Op.contains]: [{ "color": `#${color}` }]
                            }
                        }
                    });

                    return res.json(products);
                }

                // Find Products including sizes and colors column
                if (size && color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            sizes: {
                                [Op.contains]: [size]
                            },
                            colors: {
                                [Op.contains]: [{ "color": `#${color}` }]
                            }
                        }
                    });

                    return res.json(products);
                }

                products = await Product.findAndCountAll({ limit, offset });
                return res.json(products);
            }

            // Find Products with brandId
            if (brandId && !typeId && !gender) {

                // Find Products including sizes column
                if (size && !color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            brandId,
                            sizes: {
                                [Op.contains]: [size]
                            }
                        }
                    });

                    return res.json(products);
                }

                // Find Products including colors column
                if (!size && color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            brandId,
                            colors: {
                                [Op.contains]: [{ "color": `#${color}` }]
                            }
                        }
                    });

                    return res.json(products);
                }

                // Find Products including sizes and colors column
                if (size && color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            brandId,
                            sizes: {
                                [Op.contains]: [size]
                            },
                            colors: {
                                [Op.contains]: [{ "color": `#${color}` }]
                            }
                        }
                    });

                    return res.json(products);
                }

                products = await Product.findAndCountAll({ where: { brandId }, limit, offset });
                return res.json(products);
            }

            // Find Products with typeId
            if (!brandId && typeId && !gender) {

                // Find Products including sizes column
                if (size && !color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            typeId,
                            sizes: {
                                [Op.contains]: [size]
                            }
                        }
                    });

                    return res.json(products);
                }

                // Find Products including colors column
                if (!size && color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            typeId,
                            colors: {
                                [Op.contains]: [{ "color": `#${color}` }]
                            }
                        }
                    });

                    return res.json(products);
                }

                // Find Products including sizes and colors column
                if (size && color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            typeId,
                            sizes: {
                                [Op.contains]: [size]
                            },
                            colors: {
                                [Op.contains]: [{ "color": `#${color}` }]
                            }
                        }
                    });

                    return res.json(products);
                }

                products = await Product.findAndCountAll({ where: { typeId }, limit, offset });
                return res.json(products);
            }

            // Find Products with gender
            if (!brandId && !typeId && gender) {

                // Find Products including sizes column
                if (size && !color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            gender,
                            sizes: {
                                [Op.contains]: [size]
                            }
                        }
                    });

                    return res.json(products);
                }

                // Find Products including colors column
                if (!size && color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            gender,
                            colors: {
                                [Op.contains]: [{ "color": `#${color}` }]
                            }
                        }
                    });

                    return res.json(products);
                }

                // Find Products including sizes and colors column
                if (size && color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            gender,
                            sizes: {
                                [Op.contains]: [size]
                            },
                            colors: {
                                [Op.contains]: [{ "color": `#${color}` }]
                            }
                        }
                    });

                    return res.json(products);
                }

                products = await Product.findAndCountAll({ where: { gender }, limit, offset });
                return res.json(products);
            }

            // Find Products with brandId and typeId
            if (brandId && typeId && !gender) {

                // Find Products including sizes column
                if (size && !color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            brandId, typeId,
                            sizes: {
                                [Op.contains]: [size]
                            }
                        }
                    });

                    return res.json(products);
                }

                // Find Products including colors column
                if (!size && color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            brandId, typeId,
                            colors: {
                                [Op.contains]: [{ "color": `#${color}` }]
                            }
                        }
                    });

                    return res.json(products);
                }

                // Find Products including sizes and colors column
                if (size && color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            brandId, typeId,
                            sizes: {
                                [Op.contains]: [size]
                            },
                            colors: {
                                [Op.contains]: [{ "color": `#${color}` }]
                            }
                        }
                    });

                    return res.json(products);
                }

                products = await Product.findAndCountAll({ where: { brandId, typeId }, limit, offset });
                return res.json(products);
            }

            // Find Products with brandId and gender
            if (brandId && !typeId && gender) {

                // Find Products including sizes column
                if (size && !color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            brandId, gender,
                            sizes: {
                                [Op.contains]: [size]
                            }
                        }
                    });

                    return res.json(products);
                }

                // Find Products including colors column
                if (!size && color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            brandId, gender,
                            colors: {
                                [Op.contains]: [{ "color": `#${color}` }]
                            }
                        }
                    });

                    return res.json(products);
                }

                // Find Products including sizes and colors column
                if (size && color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            brandId, gender,
                            sizes: {
                                [Op.contains]: [size]
                            },
                            colors: {
                                [Op.contains]: [{ "color": `#${color}` }]
                            }
                        }
                    });

                    return res.json(products);
                }

                products = await Product.findAndCountAll({ where: { brandId, gender }, limit, offset });
                return res.json(products);
            }

            // Find Products with typeId and gender
            if (!brandId && typeId && gender) {

                // Find Products including sizes column
                if (size && !color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            typeId, gender,
                            sizes: {
                                [Op.contains]: [size]
                            }
                        }
                    });

                    return res.json(products);
                }

                // Find Products including colors column
                if (!size && color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            typeId, gender,
                            colors: {
                                [Op.contains]: [{ "color": `#${color}` }]
                            }
                        }
                    });

                    return res.json(products);
                }

                // Find Products including colors and sizes columns
                if (size && color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            typeId, gender,
                            sizes: {
                                [Op.contains]: [size]
                            },
                            colors: {
                                [Op.contains]: [{ "color": `#${color}` }]
                            }
                        }
                    });

                    return res.json(products);
                }

                products = await Product.findAndCountAll({ where: { typeId, gender }, limit, offset });
                return res.json(products);
            }

            // Find Products with brandId, typeId and gender
            if (brandId && typeId && gender) {

                // Find Products including sizes column
                if (size && !color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            brandId, typeId, gender,
                            sizes: {
                                [Op.contains]: [size]
                            }
                        }
                    });

                    return res.json(products);
                }

                // Find Products including colors column
                if (!size && color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            brandId, typeId, gender,
                            colors: {
                                [Op.contains]: [{ "color": `#${color}` }]
                            }
                        }
                    });

                    return res.json(products);
                }

                // Find Products including colors and sizes columns
                if (size && color) {
                    products = await Product.findAndCountAll({
                        limit, offset, where: {
                            brandId, typeId, gender,
                            sizes: {
                                [Op.contains]: [size]
                            },
                            colors: {
                                [Op.contains]: [{ "color": `#${color}` }]
                            }
                        }
                    });

                    return res.json(products);
                }

                products = await Product.findAndCountAll({ where: { brandId, typeId, gender }, limit, offset });
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
                typeId = null
            } = req.body;

            // Parse Img
            const img = req.files.img;
            const [, ext] = img.mimetype.split('/');
            let fileName = uuid.v4() + "." + ext;
            img.mv(path.resolve(__dirname, "..", "static", fileName));

            // Parse colors and sizes
            const arrayOfColors = JSON.parse(colors);
            const arrayOfSizes = sizes.split(", ");

            // Create product
            const product = await Product.create({
                name,
                price,
                description,
                gender,
                sizes: arrayOfSizes,
                colors: arrayOfColors,
                img: fileName,
                quantity,
                brandId,
                typeId
            });

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
            const img = req.files.img;
            let fileName;
            if (img) {
                const [, ext] = img.mimetype.split('/');
                fileName = uuid.v4() + "." + ext;
                img.mv(path.resolve(__dirname, "..", "static", fileName));
            }

            // Parse colors and sizes
            let arrayOfColors = JSON.parse(req.body.colors);
            let arrayOfSizes = req.body.sizes.split(", ");

            // Update or not information about product
            const name = req.body.name || product.name;
            const price = req.body.price || product.price;
            const description = req.body.description || product.description;
            const quantity = req.body.quantity || product.quantity;
            const gender = req.body.gender || product.gender;

            const newColors = arrayOfColors || product.colors;
            const newSizes = arrayOfSizes || product.sizes;

            const newImg = fileName || req.product.img;

            // Update product
            await product.update({
                name,
                price,
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

            // Destroy Product
            await product.destroy();
            return res.json(product);
        } catch (err) {
            next(AppError.badRequest(err.message))
        }
    }
}

module.exports = new ProductController();