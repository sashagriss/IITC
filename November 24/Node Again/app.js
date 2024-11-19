const express = require("express");
const mongoose = require("mongoose");
const app = express();

// routes
app.get("/", (req, res) => {
  res.send("babushka");
});
app.get("/baba", (req, res) => {
  res.send("yess");
});

app.listen(3000, () => {
  console.log("Running baba 3000");
});
