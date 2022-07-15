require('dotenv').config();
const sequelize = require('./db');
const models = require("./models/models")
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const path = require("path");
const router = require('./routes/routes');
const errorHandler = require('./middlewares/errorHandlerMiddleware');

const PORT = process.env.PORT || 5000;
const app = express();

/* Middlewares */
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use("/api", router);

app.use(errorHandler);

/*
 Start Server
*/
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/client/index.html");
});

const startServer = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
}

startServer();