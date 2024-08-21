const { AppError } = require("../errors");

const errorMiddleware = (err, _, res) => {
  if (err instanceof AppError) {
    console.log(err.message);
    return res.status(err.status).json({ message: err.message });
  }

  return res.status(500).json({ message: `${err}` });
};

module.exports = errorMiddleware;
