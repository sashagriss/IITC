const Book = require("../models/bookModel.js");

const createBook = async (req, res) => {
  const { title, author, genre, publishedYear, createdBy, reviews } = req.body;
  try {
    const newBook = new Book({
      title,
      author,
      genre,
      publishedYear,
      createdBy,
      reviews,
    });
    await newBook.save();
    res.send({
      status: "succeed",
      data: newBook,
    });
  } catch (error) {
    console.error(error);
  }
};

const findBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundBook = await User.findById(id);
    if (!foundBook) {
      return res.status(404).send({
        status: "failed",
        data: "Not found",
      });
    }
    res.send({
      status: "succeed",
      data: foundBook,
    });
  } catch (error) {
    res.send("Suceeded");
  }
};

module.exports = {
  createBook,
  findBookById,
};
