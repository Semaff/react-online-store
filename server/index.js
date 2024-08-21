require("dotenv").config();

require("./models");

const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");

const sequelize = require("./db");

const router = require("./routes");

const { errorMiddleware } = require("./middlewares");

const PORT = process.env.PORT || 5000;
const app = express();

/* Middlewares */
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

app.use(errorMiddleware);

/* Start */
app.get("/", (_, res) => {
  res.sendFile(__dirname + "/static/client/index.html");
});

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.error(`Server started on port ${PORT}`));
  } catch (err) {
    console.error(err);
  }
}

start();
