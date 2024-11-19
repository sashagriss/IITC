const express = require("express");
const { checkFields } = require("../middleware/userMiddleware.js");
const router = express.Router();

const {
  createUser,
  findUserById,
  updateAll,
  updatePartly,
  deleteUser,
} = require("../controller/userControllers.js");

router.post("/", checkFields, createUser);

router.get("/:id", findUserById);

router.put("/:id", updateAll);

router.patch("/:id", updatePartly);

router.delete("/:id", deleteUser);

module.exports = router;
