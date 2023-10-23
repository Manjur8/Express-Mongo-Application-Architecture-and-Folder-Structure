import mongoose from "mongoose";

const TasksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  list_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lists",
  },
});

export default mongoose.model("Tasks", TasksSchema);