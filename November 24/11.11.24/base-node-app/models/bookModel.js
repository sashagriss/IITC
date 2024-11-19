const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
  publishedYear: {
    type: Number,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  reviews: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review",
  },
});
bookSchema.virtual("FullTitle").get(function () {
  return ` ${this.book} by ${this.author} `;
});

module.exports = mongoose.model("Book", bookSchema);
