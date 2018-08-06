const Todo = require('../models/todo');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.all = function(req, res) {
    // res.json([
    //           { description: 'exercise', isDone: true },
    //           { description: 'rest', isDone: false },
    //           { description: 'alter clothes', isDone: false },
    //           { description: 'finish proposal', isDone: false },
    //           { description: 'sleep!', isDone: false }
    // ])
    Todo.find(function (err, todos) {
        if (err) {
            return next(new Error(err))
        }
        res.json(todos)
    })
};

exports.get_id = function (req, res, next) {
    Todo.findById(req.params.id, function(err, todo) {
        if (err) return next(err);
        res.send(todo)
    })
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

exports.delete_id = function (req, res, next) {
    Todo.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

// http://dreamerslab.com/blog/en/write-a-todo-list-with-express-and-mongodb/