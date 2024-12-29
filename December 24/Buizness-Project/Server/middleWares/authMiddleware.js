import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../models/userModel.js";

dotenv.config();

export const authenticateUser = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied, no token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "User not found." });
    }

    req.user = user;
    next();
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      return res.status(403).json({ message: "Invalid token." });
    } else if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token has expired." });
    }

    res
      .status(500)
      .json({ message: "Authentication failed.", error: err.message });
  }
};

export const authorizeUser = (allowedPlans) => {
  return (req, res, next) => {
    if (!allowedPlans.includes(req.user.plan)) {
      return res.status(403).json({ message: "Insufficient permissions." });
    }
    next();
  };
};
