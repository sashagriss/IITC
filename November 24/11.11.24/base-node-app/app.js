const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// Models
const userSchema = require("./models/userModel.js");
const bookSchema = require("./models/bookModel.js");
const reviewSchema = require("./models/reviewModel.js");

// Routes
const userRout = require("./routs/userRoutes.js");
const bookRout = require("./routs/bookRoutes.js");
const reviewRout = require("./routs/reviewRout.js");

const app = express();
const PORT = 3000;
const dbUri = process.env.DB_URI;

app.use(express.json());
mongoose.connect(dbUri).then(() => {
  console.log("DB connected");
});

app.get("/", (req, res) => {
  res.send("bbbb");
});

app.use("/api/users", userRout);
app.use("/api/books", bookRout);
app.use("/api/reviews", reviewRout);

// listner
app.listen(PORT, (req, res) => {
  console.log(`Riunnin on ${PORT}`);
});
