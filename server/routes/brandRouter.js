const Router = require("express");

const { BrandController } = require("../controllers");

const { authMiddleware, roleMiddleware } = require("../middlewares");

const router = new Router();

router.get("/getall", BrandController.getAll);
router.get("/getone/:id", BrandController.getOne);

router.post("/create", authMiddleware, roleMiddleware, BrandController.create);
router.put("/update/:id", authMiddleware, roleMiddleware, BrandController.update);
router.delete("/delete/:id", authMiddleware, roleMiddleware, BrandController.delete);

module.exports = router;
