const User = require("../models/userModel.js");

const createUser = async (req, res) => {
  try {
    const { username, email, phone } = req.body;

    const newUser = new User({
      username,
      email,
      phone,
    });
    await newUser.save();
    res.send({
      status: "succeed",
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    if (error?.errorResponse?.code === 11000) {
      return res.status(400).send({
        status: "Failed",
        message: "User already exists",
      });
    }
    res.status(500).send(error);
  }
};

const findUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return res.status(404).send({
        status: "failed",
        data: "Niga",
      });
    }
    res.send({
      status: "succeed",
      data: foundUser,
    });
  } catch (error) {
    if (error?.name === "CastError") {
      return res.status(400).send({
        status: "failed",
        data: "Invalid Id",
      });
    }
    res.status(500).send(error);
  }
};

const updateAll = async (req, res) => {
  const { username, email, phone } = req.body;
  const { id } = req.params;
  try {
    const updateUser = {
      username,
      email,
      phone,
    };
    const updatedUser = await User.findByIdAndUpdate(id, updateUser, {
      new: true,
    });
    res.send(updatedUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updatePartly = async (req, res) => {
  const { username, email, phone } = req.body;
  const { id } = req.params;
  try {
    const updateUser = {};
    if (username) updateUser.username = username;

    const updatedUser = await User.findByIdAndUpdate(id, updateUser, {
      new: true,
    });

    res.send(updatedUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const deletedUser = await User.findByIdAndDelete(id);
      if (deletedUser) {
        res.send("succeed");
      } else {
        res.status(500).send("User not found");
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createUser,
  findUserById,
  updateAll,
  updatePartly,
  deleteUser,
};
