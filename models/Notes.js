const mongoose = require("mongoose")

const NotesSchema = new mongoose.Schema({
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
    }
});

const NoteModel = mongoose.model("note", NotesSchema);

module.exports = NoteModel;