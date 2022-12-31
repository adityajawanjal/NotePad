const express = require("express");
const { getNotes, addNote, deleteNote } = require("../controllers/myNotesController");

const notesRoute = express.Router();

notesRoute.get("/api/notes",getNotes);
notesRoute.post("/api/notes",addNote);

module.exports = notesRoute;