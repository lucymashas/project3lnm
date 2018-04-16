const router = require("express").Router();
const animalRoutes = require("./animals");
const scrapeRoutes = require("./scrape");


router.use("/animals", animalRoutes);
router.use("/scrape", scrapeRoutes);

module.exports = router;
