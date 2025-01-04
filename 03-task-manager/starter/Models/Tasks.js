import mongoose from "mongoose";

const TaskModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    maxlength: [20, "Name cannot be more than 20 characters"],
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Task", TaskModel);
