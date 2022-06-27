const Router = require("express");
const CategoryBrandController = require("../controllers/CategoryBrandController");
const CategoryController = require("../controllers/CategoryController");
const checkAuth = require("../middlewares/authMiddleware");
const checkRole = require("../middlewares/checkRoleMiddleware");
const router = new Router();

/*
  Categories
*/
router.get("/getall", CategoryController.getAll); // get list of all types
router.get("/getone/:id", CategoryController.getOne); // get one type

router.post("/create", checkAuth, checkRole, CategoryController.create); // create a new type
router.put('/update/:id', checkAuth, checkRole, CategoryController.update); // update a type
router.delete('/delete/:id', checkAuth, checkRole, CategoryController.delete); // delete a type

/*
  Type-Brands
*/
router.get("/:categoryId/brand/getall", CategoryBrandController.getAll);
router.get("/:categoryId/brand/getone/:brandId", CategoryBrandController.getOne);

router.post("/:categoryId/brand/create/:brandId", checkAuth, checkRole, CategoryBrandController.create);
router.delete("/:categoryId/brand/delete/:brandId", checkAuth, checkRole, CategoryBrandController.delete);

module.exports = router;