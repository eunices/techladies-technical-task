const Todo = require('../models/todo');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.add = function (req, res, next) {
    let todo = new Todo(
        {
            description: req.body.description,
            isDone: req.body.isDone,
        }
    );
    todo.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Added')
    })
};

exports.get_id = function (req, res, next) {
    Todo.findById(req.params.id, function(err, todo) {
        if (err) return next(err);
        res.send(todo)
    })
};

exports.delete_id = function (req, res, next) {
    Todo.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.list_todos = function(req, res, next) {
    Todo.find().exec(function (err, todos) {
        if (err) return next(err);
        res.send(todos)
    });
};

// http://dreamerslab.com/blog/en/write-a-todo-list-with-express-and-mongodb/