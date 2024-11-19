const express = require("express");
const router = express.Router();

const {
  createBook,
  findBookById,
} = require("../controller/bookControllers.js");

router.post("/", createBook);
router.get("/:id", findBookById);

module.exports = router;
