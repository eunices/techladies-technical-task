const express = require('express');
const router = express.Router();

const todo_controller = require('../controllers/todo');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', todo_controller.test);
router.post('/add', todo_controller.add);
router.get('/:id', todo_controller.get_id);
router.delete('/:id/delete', todo_controller.delete_id);
router.get('/list', todo_controller.list_todos);

module.exports = router;