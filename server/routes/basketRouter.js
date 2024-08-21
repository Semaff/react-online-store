const Router = require("express");
const basketController = require("../controllers/BasketController");
const checkAuth = require("../middlewares/authMiddleware");
const router = new Router();

router.get("/getone", checkAuth, basketController.getOne);

// Favourite products
router.put("/favourite/:productId", checkAuth, basketController.toggleFavourite);

// Normal products
router.put("/append/:productId/:quantity", checkAuth, basketController.append);
router.put("/increment/:productId/:quantity", checkAuth, basketController.increment);
router.put("/decrement/:productId/:quantity", checkAuth, basketController.decrement);
router.put("/remove/:productId", checkAuth, basketController.remove);
router.put("/clear", checkAuth, basketController.clear);

module.exports = router;
