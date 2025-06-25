const express = require('express');
const { createProject, getProjects } = require('../controllers/projectController');
const { protect } = require('../middlewares/auth');
const router = express.Router();

router.use(protect);
router.post('/', createProject);
router.get('/', getProjects);

module.exports = router;