const express = require("express");
const router = express.Router();

const {getTask, addTask, increaseTask, decreaseTask, deleteTask} = require("../controller/todoController.js");

router.get('/todos', getTask);
router.post('/addtask', addTask);
router.put('/increase', increaseTask);
router.patch('/decrease', decreaseTask);
router.delete('/delete', deleteTask);

module.exports = router;