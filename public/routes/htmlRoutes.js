//dependencies
const fs = require("fs");

module.exports = function(app) {
  //routing
  app.get("/notes", function(req, res) {
    //TODO return notes.html
  });


  app.get("/*", function(req, res) {
    //TODO return index.html
  });


  //API POST requests
  //create note
  app.post("/notes", function(req, res) {
    //TODO add note obj to db.json
    res.json()
  });

  //TODO delete note

};