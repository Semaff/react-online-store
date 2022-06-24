const Router = require('express');
const checkAuth = require('../middlewares/authMiddleware');
const productController = require("../controllers/ProductController");
const checkRole = require('../middlewares/checkRoleMiddleware');
const router = new Router();

router.get('/getall', productController.getAll);
router.get('/getone/:id', productController.getOne);

router.post('/create', checkAuth, checkRole, productController.create);
router.put('/update/:id', checkAuth, checkRole, productController.update);
router.delete('/delete/:id', checkAuth, checkRole, productController.delete);

module.exports = router;