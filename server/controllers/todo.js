const Todo = require('../models/todo');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.all = function (req, res) {
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


exports.add = function (req, res, next) {
    let todo = new Todo(
        {
            description: req.body.description,
            isDone: false,
        }
    );
    todo.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Added')
    })
};

exports.delete = function (req, res, next) {
    var id = req.params.id
    Todo.findByIdAndRemove(id, function (err, todo) {
        if (err) {
            return next(new Error('Todo was not found'))
        }
        res.json('Successfully removed')
    })
};

exports.update = function (req, res, next) {
    var id = req.params.id
    Todo.findById(id, function (error, todo) {
        if (error) {
            return next(new Error('Todo was not found'))
        } else {
            todo.description = req.body.description
            todo.isDone = req.body.isDone

            todo.save({
                function(error, todo) {
                    if (error) {
                        res.status(400).send('Unable to update todo')
                    } else {
                        res.status(200).json(todo)
                    }
                }
            })
        }
    }) 
};

// exports.get_id = function (req, res, next) {
//     Todo.findById(req.params.id, function(err, todo) {
//         if (err) return next(err);
//         res.send(todo)
//     })
// };

// exports.delete_id = function (req, res, next) {
//     Todo.findByIdAndRemove(req.params.id, function (err) {
//         if (err) return next(err);
//         res.send('Deleted successfully!');
//     })
// };

// http://dreamerslab.com/blog/en/write-a-todo-list-with-express-and-mongodb/