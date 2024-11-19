import express from "express";

import {
  getAllNames,
  getRandomName,
  getNameById,
  createNewName,
  updateName,
  deleteName,
} from "../controllers/nameController.js";
// import authUser from "../middleware/auth.js";

const router = express.Router();
// router.use(authUser);

router.get("/", getAllNames);

router.get("/random", getRandomName);

router.post("/", createNewName);

router.get("/:id", getNameById);

router.patch("/:id", updateName);

router.delete("/:id", deleteName);
export default router;
