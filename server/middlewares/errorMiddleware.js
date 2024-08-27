const { AppError } = require("../errors");

/* Using DI so we should include all 4 args */
const errorMiddleware = (err, _, res, __) => {
  if (err instanceof AppError) {
    console.log(err.message);
    return res.status(err.status).json({ message: err.message });
  }

  return res.status(500).json({ message: `${err}` });
};

module.exports = errorMiddleware;
