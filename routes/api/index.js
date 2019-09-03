const router = require("express").Router();
const gemstoneRoutes = require("./gemstones");
const runesRoutes = require("./runes.js");
const astrologyRoutes = require("./astrology.js");

router.use("/runes", runeRoutes);

router.use("/astrology", astrologyRoutes);
// gemstone routes
router.use("/gemstones", gemstoneRoutes);

module.exports = router;