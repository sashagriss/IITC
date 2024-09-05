const express = require("express");
const axios = require("axios");
const fakUrl = "https://fakestoreapi.com";
const app = express();
const port = 3000;

app.use(express.json());

// Route to get data
app.get("/data", async (req, res) => {
  try {
    res.send("Hello from the server");
  } catch (err) {
    console.error("error:", err);
    res.status(500).send("Server Error");
  }
});

app.get("/api/product/get/:id", (req, res) => {
  const { id } = req.params;
  try {
    axios
      .get(`${fakUrl}/products/${id}`)
      .then((response) => {
        if (!response.data) {
          res.status(400).send("id doesn't exist");
          return;
        }
        res.json(response.data);
      })
      .catch((err) => {
        console.log("Error fetching API:", err);
      });
  } catch (err) {
    console.error("error:", err);
  }
});
app.post("/api/product/add", (req, res) => {
  const { title, price, description, category, image } = req.body;
  try {
    if (!title || !price || !description || !image || !category) {
      res.status(400).send("Missing required field");
      return;
    }
    const data = {
      title: title,
      price: price,
      description: description,
      category: category,
      image: image,
    };
    axios
      .post(`${fakUrl}/products`, data)
      .then((response) => {
        res.json(response.data);
      })
      .catch((err) => {
        console.log("Error fetching API:", err);
      });
  } catch (err) {
    console.error("error:", err);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
