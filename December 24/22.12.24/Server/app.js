import express from "express";
import mongoose from "mongoose";
// import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import postsRoutes from "./routes/postsRoutes.js";

dotenv.config();
const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());
mongoose
  .connect(
    process.env.DB_URI
    //     , {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
