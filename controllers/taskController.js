const Task = require('../models/Task');

const createTask = async (req, res) => {
    const task = await Task.create({ ...req.body, project: req.params.projectId });
    res.status(201).json(task);
};

const getTasks = async (req, res) => {
    const tasks = await Task.find({ project: req.params.projectId });
    res.json(tasks);
};
module.exports = { createTask, getTasks };