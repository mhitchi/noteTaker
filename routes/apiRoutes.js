//dependencies
const Store = require("../public/assets/js/Store.js");
//express handling routes
const router = require("express").Router();

  //routing
  router.get("/notes", function(req, res) {
    //TODO return all saved notes as JSON
    //TODO set up store
    //TODO call store
    const notes = new Store().listNote();
    console.log(notes);
    res.json(JSON.parse(notes));
  });

  //API POST requests
  router.post("/notes", function(req, res) {
    //TODO receive new note to save on the request body, add it to db.json, then return new note to client
    const newNote = req.body;

    new Store().saveNote(newNote)
    console.log(newNote);
    res.json(newNote);
  });

  //TODO delete note
  router.delete("/notes/:id", function(req, res) {
    //TODO receive a query parameter containing id of note to delete
    //TODO read all notes from db.json file, remove the note with given id, reqrite the notes to db.json file
  });

module.exports = router;