const jwt = require("jsonwebtoken");

const { AppError } = require("../errors");

function authMiddleware(req, _, next) {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Bearer ...

    if (token === "null" || !token) {
      throw new Error("Not authorized");
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;

    next();
  } catch (err) {
    next(AppError.forbidden(err.message));
  }
}

module.exports = authMiddleware;
