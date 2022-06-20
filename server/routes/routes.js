const Router = require("express");
const router = new Router();
const userRouter = require('./userRouter');
const typeRouter = require("./typeRouter");
const brandRouter = require("./brandRouter");
const productRouter = require("./productRouter");
const basketRouter = require("./basketRouter");

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/product', productRouter);
router.use('/basket', basketRouter);

module.exports = router;