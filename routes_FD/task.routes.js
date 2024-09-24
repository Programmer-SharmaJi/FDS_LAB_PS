const express = require("express");
const router = express.Router();
const taskController = require("../controllers_FD/taskController");
router.route("/").get(taskController.getTaskList);
router.route("/").post(taskController.putTask);

module.exports = router;
