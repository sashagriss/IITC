import { Business } from "../models/businessModel.js";
import { User } from "../models/userModel.js";

export const getBusinessesByToken = async (req, res) => {
  try {
    const user = req.user;
    const businesses = await Business.find({ owner: user._id });
    res.status(200).json(businesses);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getAllBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find()
      .populate("owner", "name email")
      .populate("reviews.userId", "name email")
      .populate("subscribers", "name email");

    res.status(200).json({
      message: "all buisnesses get sucessfully",
      businesses,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to retrieve all businesses",
      error: err.message,
    });
  }
};

export const getBusinesseById = async (req, res) => {
  try {
    const { id } = req.params;
    const businesse = await Business.findById({ _id: id }).populate("owner");

    businesse.owner.password = undefined;
    businesse.owner.plan = undefined;

    res.status(200).json({
      message: "buisnesse get sucessfully",
      businesse,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to retrieve all businesse",
      error: err.message,
    });
  }
};

export const createBusiness = async (req, res) => {
  try {
    const user = req.user;
    const { name, description, category } = req.body;
    console.log(user);

    const businessCount = await Business.countDocuments({ owner: user._id });

    let businessLimit = 1;

    if (user.plan === "Gold") businessLimit = 3;
    else if (user.plan === "Platinum") businessLimit = 10;

    if (businessCount >= businessLimit) {
      return res.status(400).json({
        message: `You cannot create more than ${businessLimit} businesses with ${user.plan} plan.`,
      });
    }

    if (!category) {
      return res.status(400).json({
        message: "Category is required to create a business.",
      });
    }

    const newBusiness = new Business({
      name,
      description,
      category,
      owner: user._id,
    });

    await newBusiness.save();

    res.status(201).json({
      message: "Business created successfully",
      business: newBusiness,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const updateBusiness = async (req, res) => {
  try {
    const user = req.user;
    const { businessId } = req.params;
    const { name, description } = req.body;

    const business = await Business.findOne({
      _id: businessId,
      owner: user._id,
    });
    if (!business) {
      return res
        .status(404)
        .json({ message: "Business not found or you don't have permission." });
    }

    if (name) business.name = name;
    if (description) business.description = description;

    await business.save();
    res
      .status(200)
      .json({ message: "Business updated successfully", business });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const deleteBusiness = async (req, res) => {
  try {
    const user = req.user;
    const { businessId } = req.params;
    console.log(user);
    console.log(businessId);

    const business = await Business.findOneAndDelete({
      _id: businessId,
      owner: user._id,
    });

    if (!business) {
      return res
        .status(404)
        .json({ message: "Business not found or you don't have permission." });
    }

    res.status(200).json({ message: "Business deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

///
///
///

///
///
///

export const subscribeToBusiness = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    console.log(userId);

    const business = await Business.findById(id);
    if (!business) {
      return res.status(404).json({ message: "Business not found" });
    }

    if (business.owner.toString() === userId) {
      return res
        .status(400)
        .json({ message: "You cannot subscribe to your own business" });
    }

    if (business.subscribers.includes(userId)) {
      return res
        .status(400)
        .json({ message: "You are already subscribed to this business" });
    }

    business.subscribers.push(userId);
    await business.save();

    const user = await User.findById(userId);
    if (!user.savedBusinesses.includes(id)) {
      user.savedBusinesses.push(id);
      await user.save();
    }

    res.status(200).json({ message: "Subscribed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const unsubscribeFromBusiness = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const business = await Business.findById(id);
    if (!business) {
      return res.status(404).json({ message: "Business not found" });
    }

    if (!business.subscribers.includes(userId)) {
      return res
        .status(400)
        .json({ message: "You are not subscribed to this business" });
    }

    business.subscribers = business.subscribers.filter(
      (sub) => sub.toString() !== userId
    );
    await business.save();

    const user = await User.findById(userId);
    if (user.savedBusinesses.includes(id)) {
      user.savedBusinesses = user.savedBusinesses.filter(
        (businessId) => businessId.toString() !== id
      );
      await user.save();
    }

    res.status(200).json({ message: "Unsubscribed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const getSubscribers = async (req, res) => {
  try {
    const { businessId } = req.params;
    const business = await Business.findById(businessId).populate(
      "subscribers",
      "name email"
    );

    if (!business) {
      return res.status(404).json({ message: "Business not found" });
    }

    res.status(200).json(business.subscribers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching subscribers", error: error.message });
  }
};

///
///
///

export const addReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;
    const userId = req.user.id;

    const business = await Business.findById(id);
    if (!business) {
      return res.status(404).json({ message: "Business not found" });
    }

    business.reviews.push({
      userId,
      comment,
      createdAt: new Date(),
    });
    await business.save();

    res.status(200).json({
      message: "Review added successfully",
      reviews: business.reviews,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const getReviews = async (req, res) => {
  try {
    const { id } = req.params;

    const business = await Business.findById(id).populate(
      "reviews.userId",
      "name"
    );
    if (!business) {
      return res.status(404).json({ message: "Business not found" });
    }

    res.status(200).json({ reviews: business.reviews });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const { businessId, reviewId } = req.params;

    const business = await Business.findById(businessId);

    if (!business) {
      return res.status(404).json({ message: "Business not found" });
    }

    const reviewIndex = business.reviews.findIndex(
      (review) => review._id.toString() === reviewId
    );

    if (reviewIndex === -1) {
      return res.status(404).json({ message: "Review not found" });
    }

    business.reviews.splice(reviewIndex, 1);
    await business.save();

    res.status(200).json({ message: "Review deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting review", error: error.message });
  }
};

export const editReview = async (req, res) => {
  try {
    const { businessId, reviewId } = req.params;
    const { comment } = req.body;

    const business = await Business.findById(businessId);

    if (!business) {
      return res.status(404).json({ message: "Business not found" });
    }

    const review = business.reviews.find(
      (review) => review._id.toString() === reviewId
    );

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    review.comment = comment;
    review.updatedAt = new Date(); // Optional: Add timestamp for update

    await business.save();

    res.status(200).json({
      message: "Review updated successfully",
      review,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating review", error: error.message });
  }
};
