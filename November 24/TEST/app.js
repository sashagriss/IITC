import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
const PORT = 3000;
app.use(express.json());

dotenv.config();
const uri = process.env.uri;

mongoose.connect(uri).then(() => {
  console.log("Conected");
});

app.get("/", (req, res) => {
  res.send("Welcome to our API!");
});

app.listen(PORT, () => {
  console.log("Hello, World!");
});
