import express from "express";
import Name from "../Models/usersModel.js";
// import authUser from "../middleware/auth.js";s

const router = express.Router();
// router.use(authUser);

router.get("/", async (req, res) => {
  try {
    const names = await Name.find({});
    if (!names.length) {
      return res.status(404).send({
        mes: "add new name to see the list",
      });
    }
    res.status(201).send(names);
  } catch (error) {
    res.status(500).send("UnKnow server error");
  }
});

router.get("/random", async (req, res) => {
  try {
    const names = await Name.find({});
    if (!names.length) {
      return res.status(404).send({
        mes: "add new name to see the lis",
      });
    }
    const randomName = await Name.aggregate([
      {
        $sample: {
          size: 1,
        },
      },
    ]);
    res.status(201).send(randomName[0]);
  } catch (error) {
    res.status(500).send("UnKnow server error");
  }
});

router.post("/", async (req, res) => {
  const { fName, lName } = req.body;
  if (!fName || !lName) {
    return res.status(400).send({ error: "name is required" });
  }
  const newName = new Name({
    fName: req.body.fName,
    lName: req.body.lName,
    phoneNumber: req.body.phoneNumber,
  });
  await newName.save();
  res.status(201).send({
    msg: "new name added!",
    newName,
  });
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const name = await Name.findById(id);
    if (!name) {
      return res.status(404).send({ error: "Id not found" });
    }
    res.status(201).send(name);
  } catch (error) {
    console.error("Error finding name by ID:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedName = await Name.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedName) {
      return res.status(404).send({ error: "Joke not found" });
    }
    res.status(201).send({
      message: "name updated successfully",
      name: updatedName,
    });
  } catch (error) {
    console.error("Error updating name by ID:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedName = await Name.findByIdAndDelete(id);
    if (!deletedName) {
      return res.status(404).json({ error: "name not found" });
    }
    res.json({
      message: "name deleted successfully",
      nameThatRemoved: deletedName,
    });
  } catch (error) {
    console.error("Error deleting name by ID:", error);
    res.status(500).json({ error: "Server error" });
  }
});
export default router;
