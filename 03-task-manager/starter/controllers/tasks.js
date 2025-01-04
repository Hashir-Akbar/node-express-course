import Task from "../Models/Tasks.js";

const tasks = {
  // Get Task
  async getTasks(req, res) {
    try {
      const getTasks = await Task.find({});
      res.status(200).send(getTasks);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  // Get Single Task
  getSingleTask(req, res) {
    res.send("get task");
  },
  // Create Task
  async createTask(req, res) {
    try {
      const createTask = await Task.create(req.body);
      res.status(201).send(createTask);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  // Update Task
  updateTask(req, res) {
    res.send("update task");
  },
  // Delete Task
  deleteTask(req, res) {
    res.send("delete task");
  },
};

export default tasks;
