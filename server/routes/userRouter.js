const Router = require("express");

const { UserController } = require("../controllers");

const { authMiddleware, roleMiddleware } = require("../middlewares");

const router = new Router();

/* Default */
router.post("/signup", UserController.signup);
router.post("/signin", UserController.signin);
router.get("/auth", authMiddleware, UserController.checkAuth);

/* Other Actions with already created users */
router.get("/getall", authMiddleware, roleMiddleware, UserController.getAll);
router.get("/getone/:id", authMiddleware, roleMiddleware, UserController.getOne);
router.put("/update/:id", authMiddleware, roleMiddleware, UserController.updateOne); // in future we will check "Roles"
router.delete("/delete/:id", authMiddleware, roleMiddleware, UserController.deleteOne);

module.exports = router;
