import Product from "../models/productModel.js";

export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products.length) {
      return res.status(404).send({
        mes: "add new products to see the list",
      });
    }
    res.status(201).send(products);
  } catch (error) {
    res.status(500).send("UnKnow server error");
  }
};

export const getRandomProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    const randomProduct = await Product.aggregate([
      {
        $sample: {
          size: 1,
        },
      },
    ]);
    res.status(201).send(randomProduct[0]);
  } catch (error) {
    res.status(500).send("UnKnow server error");
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).send({ error: "Id not found" });
    }
    res.status(201).send(product);
  } catch (error) {
    console.error("Error finding product by ID:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const createNewProduct = async (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).send({ error: "product is required" });
  }
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  await newProduct.save();
  res.status(201).send({
    msg: "new product added!",
    newProduct,
  });
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedProduct) {
      return res.status(404).send({ error: "Product not found" });
    }
    res.status(201).send({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating Product by ID:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "product not found" });
    }
    res.json({
      message: "name deleted successfully",
      productThatRemoved: deletedProduct,
    });
  } catch (error) {
    console.error("Error deleting product by ID:", error);
    res.status(500).json({ error: "Server error" });
  }
};
