const checkFields = (req, res, next) => {
  const { username, email, phone } = req.body;
  if (!username || !email || !phone) {
    return res.status(400).send({
      status: "error",
      message: "Fill all the fields",
    });
  }
  next();
};

module.exports = {
  checkFields,
};
