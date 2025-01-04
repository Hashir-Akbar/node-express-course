import express from "express";
import route from "./routes/tasks.js";
import "dotenv/config";
import ConnectDB from "./db/connect.js";

const app = express();

const PORT = 3000;

//Middlewares
app.use(express.json());

//Routes
app.use("/api/v1/tasks", route);

app.get("/", (req, res) => {
  res.send("tast manager");
});

try {
  ConnectDB()
    .then(console.log("DB connected successfully"))
    .catch((error) => console.log(error));
  app.listen(PORT, () => {
    console.log("your app is running on http://localhost:" + PORT);
  });
} catch (error) {
  throw new Error(error);
}

// Rest Api Design

//  app.get("api/v1/tasks")         - get all tasks
//  app.post("api/v1/tasks")        - create new tasks
//  app.get("api/v1/tasks/:id")     - get single tasks
//  app.patch("api/v1/tasks/:id")   - update tasks
//  app.delete("api/v1/tasks/:id")  - delete tasks
