const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual("FullDetails").get(function () {
  return `Email ${this.email} and Phone ${this.phone} of ${this.username}`;
});

module.exports = mongoose.model("User", userSchema);
