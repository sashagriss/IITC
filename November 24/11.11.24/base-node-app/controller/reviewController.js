const Review = require("../models/reviewModel.js");

const createReview = async (req, res) => {
  const { reviewText, rating, book, createdBy } = req.body;
  try {
    const newReview = new Review({
      reviewText,
      rating,
      book,
      createdBy,
    });
    await newReview.save();
    res.send({
      status: "succeed",
      data: newReview,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createReview,
};
