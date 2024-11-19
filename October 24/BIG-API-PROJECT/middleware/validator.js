const validateJTask = (req, res, next) => {
  if (!req.body.title || !req.body.description) {
    return res.status(400).send({
      message: "Missing Fileds",
    });
  }
  next();
};

export { validateJTask };
