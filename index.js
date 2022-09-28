const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const NoteModel = require("./models/Notes");
const TodoModel = require("./models/Todo");
const uri = require("./constant-list");

app.use(express.json());

app.use(cors());
app.options("*", cors())

mongoose.connect(uri);

app.get("/getNotes", (req, res) => {
  NoteModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/getTodos", (req, res) => {
  TodoModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/saveNote", async (req, res) => {
  const note = req.body;
  const newNote = new NoteModel(note);
  await newNote.save();
  res.json(note);
});

app.post("/saveTodo", async (req, res) => {
  const todo = req.body;
  const newTodo = new TodoModel(todo);
  await newTodo.save();
  res.json(todo);
});

app.post("/deleteNote", (req, res) => {
  NoteModel.findOneAndDelete({ id: req.body.id }, (err, response) => {
    if (err) return console.log(err);
    res.json(response);
  });
});

app.post("/deleteTodo", (req, res) => {
  TodoModel.findOneAndDelete({ id: req.body.id }, (err, response) => {
    if (err) return console.log(err);
    res.json(response);
  });
});

app.listen(process.env.PORT || 3001, () => {
  console.log("Sever running at port 3001");
});
