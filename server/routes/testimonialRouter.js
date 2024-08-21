const Router = require("express");
const TestimonialController = require("../controllers/TestimonialController");
const checkAuth = require("../middlewares/authMiddleware");
const checkRole = require("../middlewares/checkRoleMiddleware");
const router = new Router();

router.get("/getall", TestimonialController.getAll);
router.get("/getone/:id", TestimonialController.getOne);

router.post("/create", checkAuth, checkRole, TestimonialController.create);
router.put("/update/:id", checkAuth, checkRole, TestimonialController.update);
router.delete("/delete/:id", checkAuth, checkRole, TestimonialController.delete);

module.exports = router;
