
module.exports = function(app) {
  //routing
  app.get("/api/notes", function(req, res) {
    //TODO read db.json file
    //TODO return all saved notes as JSOn
  });

  //API POST requests
  app.post("/api/notes", function(req, res) {
    //TODO receive new note to save on the request body, add it to db.json, then return new note to client
  });

  //TODO delete note
  app.delete("/api/notes/:id", function(req, res) {
    //TODO receive a query parameter containing id of note to delete
    //TODO read all notes from db.json file, remove the note with given id, reqrite the notes to db.json file
  });

};