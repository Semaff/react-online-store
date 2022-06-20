const Router = require('express');
const checkAuth = require('../middlewares/authMiddleware');
const productController = require("../controllers/ProductController");
const router = new Router();

router.get('/getall', productController.getAll);
router.get('/getone/:id', productController.getOne);

router.post('/create', checkAuth, productController.create);
router.put('/update/:id', checkAuth, productController.update);
router.delete('/delete/:id', checkAuth, productController.delete);

module.exports = router;