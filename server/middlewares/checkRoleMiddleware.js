const AppError = require("../error/AppError");

function checkRole(req, res, next) {
    try {
        if (req.user.role !== 'ADMIN') {
            throw new Error('No access');
        }

        next();
    } catch (err) {
        next(AppError.badRequest(err.message));
    }
}

module.exports = checkRole;