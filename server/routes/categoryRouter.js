const Router = require("express");

const { CategoryBrandController, CategoryController } = require("../controllers");

const { authMiddleware, roleMiddleware } = require("../middlewares");

const router = new Router();

/* Categories */
router.get("/getall", CategoryController.getAll);
router.get("/getone/:id", CategoryController.getOne);

router.post("/create", authMiddleware, roleMiddleware, CategoryController.create);
router.put("/update/:id", authMiddleware, roleMiddleware, CategoryController.update);
router.delete("/delete/:id", authMiddleware, roleMiddleware, CategoryController.delete);

/* Type-Brands */
router.get("/:categoryId/brand/getall", CategoryBrandController.getAll);
router.get("/:categoryId/brand/getone/:brandId", CategoryBrandController.getOne);

router.post(
  "/:categoryId/brand/create/:brandId",
  authMiddleware,
  roleMiddleware,
  CategoryBrandController.create,
);

router.delete(
  "/:categoryId/brand/delete/:brandId",
  authMiddleware,
  roleMiddleware,
  CategoryBrandController.delete,
);

module.exports = router;
