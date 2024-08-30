// routes/robotRoutes.js

const express = require("express");
const router = express.Router();
const { navigateRobots } = require("../controllers/robotController");

router.post("/navigate", navigateRobots);

module.exports = router;
