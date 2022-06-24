const Router = require("express");
const typeController = require("../controllers/TypeController");
const checkAuth = require("../middlewares/authMiddleware");
const checkRole = require("../middlewares/checkRoleMiddleware");
const router = new Router();

router.get("/getall", typeController.getAll); // get list of all types
router.get("/getone/:id", typeController.getOne); // get one type

router.post("/create", checkAuth, checkRole, typeController.create); // create a new type
router.put('/update/:id', checkAuth, checkRole, typeController.update); // update a type
router.delete('/delete/:id', checkAuth, checkRole, typeController.delete); // delete a type

module.exports = router;