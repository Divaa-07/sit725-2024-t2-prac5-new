// controllers/taskController.js
const TaskModel = require('../models/taskModel');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskModel.getAllTasks();
        res.json({ statusCode: 200, data: tasks });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const addTask = async (req, res) => {
    const { title, description } = req.body;
    try {
        const newTask = new TaskModel({ title, description });
        await newTask.save();
        res.redirect('/');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getAllTasks,
    addTask,
};
