const express = require('express');
const { createTask, getTasks } = require('../controllers/taskController');
const { protect } = require('../middlewares/auth');
const router = express.Router({ mergeParams: true });

router.use(protect);
router.post('/', createTask);
router.get('/', getTasks);

module.exports = router;