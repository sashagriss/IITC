const express = require("express");
const router = express.Router();

const { createReview } = require("../controller/reviewController.js");
router.post("/", createReview);

module.exports = router;
