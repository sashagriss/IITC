import express from "express";
import morgan from "morgan";
import logRequest from "./middleware/logger.js";
import jokesRoutes from "./routes/jokesRoute.js";
import namesRoutes from "./routes/usersRoute.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

// import authUser from "./middleware/auth.js";

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(logRequest);
dotenv.config();
console.log(process.env.DB_URI);

const uri = process.env.DB_URI;
//
mongoose.connect(uri).then(() => {
  console.log("Conected");
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// app.use(authUser);
// app.use(express.static("public"));

//check if server works
app.get("/api/status", (req, res) => {
  res.send({ status: "server is running" });
});

//create route
app.use("/api/joke", jokesRoutes);

app.use("/api/name", namesRoutes);

//
app.listen(PORT, () => {
  console.log(`Server is running on  port ${PORT}`);
});
