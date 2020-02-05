//dependencies
const fs = require("fs");

module.exports = function(app) {
  //routing

  app.get("/api/notes", function(req, res) {
    //TODO read db.json file
    let rawData = fs.readFile("../../db/db.json");
    let storedNotes = JSON.parse(rawData);
    //TODO return all saved notes as JSON
    console.log(storedNotes);
  });

  //API POST requests
  app.post("/api/notes", function(req, res) {
    //TODO receive new note to save on the request body, add it to db.json, then return new note to client
    const newNote = req.body;
    console.log(newNote);
    res.json(newNote);
  });

  //TODO delete note
  app.delete("/api/notes/:id", function(req, res) {
    //TODO receive a query parameter containing id of note to delete
    //TODO read all notes from db.json file, remove the note with given id, reqrite the notes to db.json file
  });

};