const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    description: {type: String, required: true, max: 100},
    isDone: {type: Boolean, required: true},
});


// Export the model
module.exports = mongoose.model('Todo', TodoSchema);