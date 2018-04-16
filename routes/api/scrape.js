const router = require("express").Router();
const ecosController = require("../../controllers/ecos");



// Matches with "/api/scrape"
router
  .route("/")
  .get(ecosController.scrape);

module.exports = router;
