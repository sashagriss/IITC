const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello baba");
});
app.get("/user", (req, res) => {
  res.send({
    name: "Baba",
    age: 33,
  });
});

app.listen(PORT, () => {
  console.log(" I Am Running");
});
// const { add, subtract, divide, multiply } = require("./math.js");
// console.log(divide(4, 2));
// console.log(add(2, 4));
// console.log(subtract(4, 2));
// console.log(multiply(4, 2));
