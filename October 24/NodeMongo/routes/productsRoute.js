import express from "express";
import {
  getAllProduct,
  getRandomProduct,
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
// import authUser from "../middleware/auth.js";

const router = express.Router();
// router.use(authUser);

router.get("/", getAllProduct);

router.get("/random", getRandomProduct);

router.get("/:id", getProductById);

router.post("/", createNewProduct);

router.patch("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
