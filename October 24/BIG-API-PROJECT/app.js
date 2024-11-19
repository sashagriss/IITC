import fs from "fs";
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";

import users from "./db/users.json" assert { type: "json" };
import Task from "./db/tasks.json" assert { type: "json" };
import projects from "./db/projects.json" assert { type: "json" };

const app = express();
const PORT = 3000;

console.log(process);
// const router =
const uri =
  "mongodb+srv://sashameduza24:0QOghH9rYdwOyGt8@cluster0.ny03p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri).then(() => {
  console.log("Conected :)");
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({});
    if (tasks.length === 0) {
      res.status(404).send();
    }
  } catch {
    err;
  }
});

app.use(express.json());
app.use(morgan("tiny"));

app.get("/date", (req, res) => {
  console.log(add(2, 3));
  date();
  res.send("Hello baba");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
