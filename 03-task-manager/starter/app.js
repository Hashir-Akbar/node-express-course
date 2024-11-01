import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("tast manager");
});

app.listen(PORT, () => {
  console.log("your app is running on http://localhost:" + PORT);
});
