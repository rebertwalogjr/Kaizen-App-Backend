const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        require: true
    },
    isDone: {
        type: Boolean
    }
});

const TodoModel = mongoose.model("todo", TodoSchema);

module.exports = TodoModel;