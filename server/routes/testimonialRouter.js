const Router = require("express");

const { TestimonialController } = require("../controllers");

const { authMiddleware, roleMiddleware } = require("../middlewares");

const router = new Router();

router.get("/getall", TestimonialController.getAll);
router.get("/getone/:id", TestimonialController.getOne);

router.post("/create", authMiddleware, roleMiddleware, TestimonialController.create);
router.put("/update/:id", authMiddleware, roleMiddleware, TestimonialController.update);
router.delete("/delete/:id", authMiddleware, roleMiddleware, TestimonialController.delete);

module.exports = router;
