//dependencies
const Store = require("../public/assets/js/Store.js");
//express handling routes
const router = require("express").Router();

  //routing
  router.get("/notes", function(req, res) {
    //return all saved notes as JSON
    //TODO set up store
    //call store
    const savedNotes = new Store().listNote();
    // let stringyNotes = JSON.stringify(notes);
    // console.log(`Getting notes: ${stringyNotes}`);
    console.log(`Getting notes: ${savedNotes}`);
    // res.json(JSON.parse(notes));
    res.json(savedNotes);
  });

  //API POST requests
  router.post("/notes", function(req, res) {
    //TODO receive new note to save on the request body, add it to db.json, then return new note to client
    const newNote = req.body;

    new Store().saveNote(newNote);
    console.log(`getting new note: ${newNote}`);
    res.json(newNote);
  });

  //TODO delete note
  router.delete("/notes/:id", function(req, res) {
    //TODO receive a query parameter containing id of note to delete
    //TODO read all notes from db.json file, remove the note with given id, reqrite the notes to db.json file
  });

module.exports = router;