import express from "express";
import projects from "./HM/projects.json" assert { type: "json" };
// Uncomment and modify the imports similarly if needed
// import tasks from "./HM/tasks.json" assert { type: "json" };
// import users from "./HM/users.json" assert { type: "json" };
// import products from "./Class/product.json" assert { type: "json" };
// import jokes from "./Class/joke.json" assert { type: "json" };

console.log(projects);

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/projects", (req, res) => {
  res.send(projects);
});

app.get("/api/projects/:id", (req, res) => {
  const id = +req.params["id"];
  const projectById = projects.find((p) => p.id === id);

  if (projectById) {
    res.send(projectById);
  } else {
    res.status(404).send({ error: "Project not found" });
  }
});

app.get("/api/status", (req, res) => {
  res.send({ mess: "Server is up" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
