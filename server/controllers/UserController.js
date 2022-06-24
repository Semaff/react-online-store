const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User, Basket } = require("../models/models");
const AppError = require("../error/AppError");

const generateJWT = (id, username, role) => {
    return jwt.sign(
        { id, username, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {
    async signup(req, res, next) {
        try {
            const { username, password, role } = req.body;
            if (!username || !password) {
                throw new Error('Wrong Username or Password');
            };

            const candidate = await User.findOne({ where: { username } });
            if (candidate) {
                throw new Error('User with that E-mail already exists!');
            }

            const hashPassword = await bcrypt.hash(password, 5);
            const user = await User.create({ username, role, password: hashPassword });
            const basket = await Basket.create({ userId: user.id });
            const token = generateJWT(user.id, user.username, user.role)

            return res.json({ token: token })
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async signin(req, res, next) {
        try {
            const { username, password } = req.body;

            const user = await User.findOne({ where: { username } });
            if (!user) {
                throw new Error('User does not exist!');
            }

            let comparePassword = bcrypt.compareSync(password, user.password);
            if (!comparePassword) {
                throw new Error('Wrong password!');
            }

            const token = generateJWT(user.id, user.username, user.role);
            return res.json({ token: token })
        } catch (err) {
            next(AppError.badRequest(err.message));
        }
    }

    async checkAuth(req, res, next) {
        try {
            const { id, username, role } = req.user;

            const user = await User.findByPk(id);
            if (!user) {
                throw new Error('User does not exist!');
            }

            const token = generateJWT(id, username, role);
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