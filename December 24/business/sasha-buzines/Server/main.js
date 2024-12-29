import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import userRoutes from "./routes/userRoutes.js";
import businessRoutes from "./routes/businessRoutes.js";

dotenv.config();

mongoose.connect(process.env.URI).then(() => {
  console.log("Connected to MongoDB");
});

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("tiny"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("businessUpdated", (data) => {
    io.emit("businessUpdated", data);
  });

  socket.on("businessDeleted", () => {
    io.emit("businessDeleted");
  });
});

app.get("/api/status", (req, res) => {
  res.send({ status: "Server is running" });
});

app.use("/api/user", userRoutes);
app.use("/api/businesses", businessRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
