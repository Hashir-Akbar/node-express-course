import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("tast manager");
});

app.listen(PORT, () => {
  console.log("your app is running on http://localhost:" + PORT);
});

// Rest Api Design
 
//  app.get("api/v1/tasks")         - get all tasks
//  app.post("api/v1/tasks")        - create new tasks
//  app.get("api/v1/tasks/:id")     - get single tasks
//  app.patch("api/v1/tasks/:id")   - update tasks
//  app.delete("api/v1/tasks/:id")  - delete tasks

