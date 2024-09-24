const mongoose = require('mongoose'); // Correct spelling of mongoose

const taskSchema = new mongoose.Schema({
    taskTitle: {
        type: String,
        required: [true, "Task title is required"] // Corrected `require` to `required`
    },
    taskDesc: {
        type: String,
        required: [true, "Task description is required"] // Corrected `require` to `required`
    }
});

// Exporting the model with the same name
module.exports = mongoose.model("task", taskSchema);
