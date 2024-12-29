import express from "express";
import { authenticateUser } from "../middleWares/authMiddleware.js";
import {
  signUp,
  logIn,
  logOut,
  updateUser,
  getUserById,
  deleteUser,
} from "../controllers/usersController.js";

const router = express.Router();

router.get("/getUserByToken", authenticateUser, getUserById);
router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/logout", authenticateUser, logOut);
router.patch("/:id", authenticateUser, updateUser);
router.delete("/:id", authenticateUser, deleteUser);

export default router;
