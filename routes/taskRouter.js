const express = require("express");
const { model } = require("mongoose");
const taskController = require("../controller/taskController");
const taskRouter = express.Router();

taskRouter.post("/create", taskController.addTask);
taskRouter.get("/", taskController.getTask);
taskRouter.put("/update/:id", taskController.updateTask);
taskRouter.delete("/delete/:id", taskController.deleteTask);

module.exports = taskRouter;
