import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema({
  joke: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Name",
    required: true,
  },
});

export default mongoose.model("Joke", jokeSchema);
