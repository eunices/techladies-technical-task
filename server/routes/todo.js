const express = require('express');
const router = express.Router();
const todo_controller = require('../controllers/todo');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', todo_controller.test);

// one route to list all
router.get('/all', todo_controller.all);

// one route to add
router.post('/add', todo_controller.add);

// one route for delete
router.get('/delete/:id', todo_controller.delete)

// one route for update
router.post('/update/:id', todo_controller.update);

// routes that were created following a tutorial
// router.get('/:id', todo_controller.get_id);
// router.delete('/:id/delete', todo_controller.delete_id);

module.exports = router;