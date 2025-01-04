import { Router } from "express";
import tasks from "../controllers/tasks.js";

const route = Router();

const { getTasks, getSingleTask, createTask, updateTask, deleteTask } = tasks;

// Tasks Routes
route.get("/", getTasks);
route.get("/:id", getSingleTask);
route.post("/", createTask);
route.patch("/:id", updateTask);
route.delete("/:id", deleteTask);

export default route;
