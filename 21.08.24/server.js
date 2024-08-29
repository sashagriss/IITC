const express = require("express");
const app = express();

const contact = {
  phone: "0535315363",
  email: "sasha@123",
};

const products = [
  { id: 123, name: "pen", price: 5 },
  { id: 124, name: "pencil", price: 3 },
];

app.get("/", (req, res) => {
  res.send("Welcome to my basic Express server!");
});

app.get("/about", (req, res) => {
  res.send("This server was created by Sasha");
});

app.get("/contact", (req, res) => {
  res.json(contact);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const myId = req.params.id;
  let product;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === parseInt(myId)) {
      product = products[i];
    }
  }
  res.json(product);
});

app.get("/api/products/name/:name", (req, res) => {
  const myName = req.params.name;
  let name;
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === myName) {
      name = products[i];
    }
  }
  console.log(name);
  res.json(name);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
