const Router = require("express");

const { BasketController } = require("../controllers");

const { authMiddleware } = require("../middlewares");

const router = new Router();

router.get("/getone", authMiddleware, BasketController.getOne);

/* Favorite products */
router.put("/favorite/:productId", authMiddleware, BasketController.toggleFavorite);

/* Normal products */
router.put("/append/:productId/:quantity", authMiddleware, BasketController.append);
router.put("/increment/:productId/:quantity", authMiddleware, BasketController.increment);
router.put("/decrement/:productId/:quantity", authMiddleware, BasketController.decrement);
router.put("/remove/:productId", authMiddleware, BasketController.remove);
router.put("/clear", authMiddleware, BasketController.clear);

module.exports = router;
