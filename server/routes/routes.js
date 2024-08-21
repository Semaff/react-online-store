const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const categoryRouter = require("./categoryRouter");
const brandRouter = require("./brandRouter");
const productRouter = require("./productRouter");
const basketRouter = require("./basketRouter");
const ratingRouter = require("./ratingRouter");
const testimonialRouter = require("./testimonialRouter");

router.use("/user", userRouter);
router.use("/category", categoryRouter);
router.use("/brand", brandRouter);
router.use("/product", productRouter);
router.use("/basket", basketRouter);
router.use("/rating", ratingRouter);
router.use("/testimonial", testimonialRouter);

module.exports = router;
