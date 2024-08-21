const Router = require("express");
const checkAuth = require("../middlewares/authMiddleware");
const router = new Router();
const ratingController = require("../controllers/RatingController");

router.get("/:productId", ratingController.getOne);
router.post("/:productId/rate/:rate([1-5])", checkAuth, ratingController.create);

module.exports = router;
