const path = require("path");

const express = require("express");

// Grab the root directory path
const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  // Build the path to the HTML file
  res.sendFile(path.join(rootDir, "..", "views", "shop.html"));
});

module.exports = router;
