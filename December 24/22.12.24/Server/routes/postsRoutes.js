import express from "express";
import dotenv from "dotenv";

import { postController } from "../controllers/postController.js";

dotenv.config();
const router = express.Router();

router.get("/", postController.getAllPosts);
router.post("/add", postController.createPost);
router.patch("/update/:id", postController.updatePost);
router.delete("/remove/:id", postController.deletePosts);
// router.get("/:id", getPostByID);
export default router;
