require('dotenv').config();
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const sequelize = require('./db');
const path = require("path");

const PORT = process.env.PORT || 5000;
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));

const startServer = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (err) {
        console.log(err);
    }
}

startServer();