const Router = require("express");

const { BasketController } = require("../controllers");

const { authMiddleware } = require("../middlewares");

const router = new Router();

router.get("/", authMiddleware, BasketController.get);

/* Favorite products */
router.put("/favorite/:productId", authMiddleware, BasketController.toggleFavoriteProduct);

/* Normal products */
router.put("/add/:productId/:quantity?", authMiddleware, BasketController.addProduct);
router.put("/remove/:productId/:quantity?", authMiddleware, BasketController.removeProduct);

router.put("/clear", authMiddleware, BasketController.clear);

module.exports = router;
