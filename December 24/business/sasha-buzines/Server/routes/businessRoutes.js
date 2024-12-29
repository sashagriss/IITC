import express from "express";
import {
  createBusiness,
  getBusinessesByToken,
  updateBusiness,
  deleteBusiness,
  getAllBusinesses,
  subscribeToBusiness,
  unsubscribeFromBusiness,
  addReview,
  getReviews,
  getSubscribers,
  deleteReview,
  editReview,
  getBusinesseById,
} from "../controllers/businessController.js";
import {
  authenticateUser,
  authorizeUser,
} from "../middleWares/authMiddleware.js";

const router = express.Router();

router.get("/my-businesses", authenticateUser, getBusinessesByToken);

router.get("/getbiz/:id", getBusinesseById);

router.get("/getallbusinesses", getAllBusinesses);

router.post(
  "/create",
  authenticateUser,
  authorizeUser(["Standard", "Gold", "Platinum"]),
  createBusiness
);

router.put(
  "/update/:businessId",
  authenticateUser,
  authorizeUser(["Standard", "Gold", "Platinum"]),
  updateBusiness
);

router.delete(
  "/delete/:businessId",
  authenticateUser,
  authorizeUser(["Standard", "Gold", "Platinum"]),
  deleteBusiness
);

router.post("/:id/subscribe", authenticateUser, subscribeToBusiness);
router.delete("/:id/unsubscribe", authenticateUser, unsubscribeFromBusiness);
router.get("/:businessId/subscribers", authenticateUser, getSubscribers);

router.post("/:id/review", authenticateUser, addReview);
router.get("/:id/reviews", getReviews);
router.put("/:businessId/review/:reviewId", authenticateUser, editReview);
router.delete("/:businessId/review/:reviewId", authenticateUser, deleteReview);

export default router;
