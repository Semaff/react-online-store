const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User, Basket } = require("../models/models");
const AppError = require("../error/AppError");

const generateJWT = (id, email) => {
    return jwt.sign(
        { id, email },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {
    async signup(req, res, next) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                throw new Error('Wrong Email or Password');
            };

            const candidate = await User.findOne({ where: { email } });
            if (candidate) {
                throw new Error('User with that E-mail already exists!');
            }

            const hashPassword = await bcrypt.hash(password, 5);
            const user = await User.create({ email, password: hashPassword });
            const basket = await Basket.create({ userId: user.id });
            const token = generateJWT(user.id, user.email)

            return res.json({ token: token })
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async signin(req, res, next) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ where: { email } });
            if (!user) {
                throw new Error('User does not exist!');
            }

            let comparePassword = bcrypt.compareSync(password, user.password);
            if (!comparePassword) {
                throw new Error('Wrong password!');
            }

            const token = generateJWT(user.id, user.email);
            return res.json({ token: token })
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async checkAuth(req, res, next) {
        try {
            const { id, email } = req.user;

            const user = await User.findByPk(id);
            if (!user) {
                throw new Error('User does not exist!');
            }

            const token = generateJWT(id, email);
            return res.json({ token: token });
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const users = await User.findAll();
            return res.json(users);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async getOne(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error("Wrong id!");
            }

            const user = await User.findByPk(req.params.id);
            if (!user) {
                throw new Error('User does not exist!')
            }

            return res.json(user);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async updateOne(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Wrong id!');
            }

            const user = await User.findByPk(req.params.id);
            if (!user) {
                throw new Error('User does not found!');
            }

            let comparePassword = bcrypt.compareSync(req.body.password, user.password);
            if (comparePassword) {
                throw new Error('Password is the same as old!');
            }

            const password = req.body.password || user.password;
            const hashPassword = await bcrypt.hash(password, 5);
            await user.update({ password: hashPassword });
            return res.json(user);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async deleteOne(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Wrong id!');
            }

            const user = await User.findByPk(req.params.id);
            if (!user) {
                throw new Error('User does not found!');
            }
            const basket = await Basket.findOne({ where: { userId: req.params.id } });
            if (basket) {
                await basket.destroy();
            }

            await user.destroy();
            return res.json(user);
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }
}

module.exports = new UserController();