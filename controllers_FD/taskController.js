const Task = require("../models_FD/taskModel"); // Keeping the original path and naming

// Get Task List
exports.getTaskList = async (req, resp, next) => {
  try {
    const taskList = await Task.find();
    resp.status(200).json({
      status: "success",
      result: taskList.length,
      data: {
        taskList, // Using the same naming convention
      },
    });
  } catch (error) {
    resp.status(400).json({
      status: "failed",
      message: error.message, // Keeping the error message handling
      data: {}, // Including an empty data object for consistency
    });
  }
};

// Create a New Task
exports.createTask = async (req, resp, next) => {
  try {
    const entry = new Task(req.body); // Construct the task object from request body
    const savedTask = await entry.save(); // Save the new task to the database

    resp.status(201).json({
      status: "success",
      data: {
        task: savedTask, // Keeping the variable naming from the first snippet
      },
    });
  } catch (error) {
    resp.status(400).json({
      status: "failed",
      message: error.message, // Keeping the error message handling
    });
  }
};
