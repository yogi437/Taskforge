const Project = require('../models/Project');

const createProject = async (req, res) => {
    const project = await Project.create({ ...req.body, owner: req.user._id });
    res.status(201).json(project);
};

const getProjects = async (req, res) => {
    const projects = await Project.find({ members: req.user._id });
    res.json(projects);
};
module.exports = { createProject, getProjects };