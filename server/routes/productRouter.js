const Router = require("express");

const { ProductController } = require("../controllers");

const { authMiddleware, roleMiddleware } = require("../middlewares");

const router = new Router();

router.get("/getall", ProductController.getAll);
router.get("/getone/:id", ProductController.getOne);

router.post("/create", authMiddleware, roleMiddleware, ProductController.create);
router.put("/update/:id", authMiddleware, roleMiddleware, ProductController.update);
router.delete("/delete/:id", authMiddleware, roleMiddleware, ProductController.delete);

module.exports = router;
