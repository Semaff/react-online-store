const { AppError } = require("../errors");

function roleMiddleware(req, _, next) {
  try {
    if (req.user.role !== "ADMIN") {
      throw new Error("No access");
    }

    next();
  } catch (err) {
    next(AppError.badRequest(err.message));
  }
}

module.exports = roleMiddleware;
