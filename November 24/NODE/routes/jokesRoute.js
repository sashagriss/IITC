import express from "express";
import Joke from "../Models/jokeModel.js";

// import authUser from "../middleware/auth.js";

// Dummy DB Import
const router = express.Router();
// router.use(authUser);

// Jokes Routes
router.get("/", async (req, res) => {
  try {
    const jokes = await Joke.find({});
    if (!jokes.length) {
      return res.status(404).send({
        mes: "add new joke to see the jokes",
      });
    }
    res.status(201).send(jokes);
  } catch (error) {
    res.status(500).send("UnKnow server error");
  }
});

router.get("/random", async (req, res) => {
  try {
    const jokes = await Joke.find({});
    if (!jokes.length) {
      res.status(404).send({
        mes: "add new joke to see the jokes",
      });
    }
    const randomJoke = await Joke.aggregate([
      {
        $sample: {
          size: 1,
        },
      },
    ]);
    res.status(201).send(randomJoke[0]);
  } catch (error) {
    res.status(500).send("UnKnow server error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const joke = await Joke.findById(id);
    if (!joke) {
      return res.status(404).send({ error: "Joke not found" });
    }
    res.status(201).send(joke);
  } catch (error) {
    console.error("Error finding joke by ID:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/", async (req, res) => {
  const { joke } = req.body;
  if (!joke) {
    res.status(400).json({ error: "joke is required" });
  }
  const newJoke = new Joke({
    joke: req.body.joke,
    createdBy: req.body.createdBy,
  });
  await newJoke.save();
  res.status(201).send({
    msg: "Good Job!",
  });
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedJoke = await Joke.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedJoke) {
      res.status(404).send({ error: "Joke not found" });
    }
    res.status(201).send({
      message: "Joke updated successfully",
      joke: updatedJoke,
    });
  } catch (error) {
    console.error("Error updating joke by ID:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJoke = await Joke.findByIdAndDelete(id);
    if (!deletedJoke) {
      return res.status(404).json({ error: "Joke not found" });
    }
    res.json({
      message: "Joke deleted successfully",
      joke: deletedJoke,
    });
  } catch (error) {
    console.error("Error deleting joke by ID:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
