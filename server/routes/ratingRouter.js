const Router = require("express");

const { RatingController } = require("../controllers");

const { authMiddleware } = require("../middlewares");

const router = new Router();

router.get("/:productId", RatingController.getOne);
router.post("/:productId/rate/:rate([1-5])", authMiddleware, RatingController.create);

module.exports = router;
