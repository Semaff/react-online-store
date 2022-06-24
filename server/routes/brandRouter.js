const Router = require("express");
const brandController = require("../controllers/BrandController");
const checkAuth = require("../middlewares/authMiddleware");
const checkRole = require("../middlewares/checkRoleMiddleware");
const router = new Router();

router.get('/getall', brandController.getAll); // get list of all brands
router.get('/getone/:id', brandController.getOne); // get one brand

router.post("/create", checkAuth, checkRole, brandController.create); // create a new brand
router.put('/update/:id', checkAuth, checkRole, brandController.update); // update a brand
router.delete('/delete/:id', checkAuth, checkRole, brandController.delete); // delete a brand

module.exports = router;