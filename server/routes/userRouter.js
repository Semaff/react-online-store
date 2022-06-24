const Router = require("express");
const userController = require("../controllers/UserController");
const checkAuth = require("../middlewares/authMiddleware");
const checkRole = require("../middlewares/checkRoleMiddleware");
const router = new Router();

// Default
router.post("/signup", userController.signup);
router.post("/signin", userController.signin);
router.get("/auth", checkAuth, userController.checkAuth);

// Action with created Users
router.get("/getall", checkAuth, checkRole, userController.getAll); //
router.get("/getone/:id", checkAuth, checkRole, userController.getOne);
router.put("/update/:id", checkAuth, checkRole, userController.updateOne); // in future we will check "Roles"
router.delete("/delete/:id", checkAuth, checkRole, userController.deleteOne);

module.exports = router;