const express = require("express");
const bcrypt = require("bcrypt");

const saltRounds = 10;

const app = express();

const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    data: "Hi from server",
  });
});

app.post("/encrypt-password", async (req, res) => {
  try{

// Listener
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
