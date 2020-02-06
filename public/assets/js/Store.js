//dependencies
const fs = require("fs");
//helper function
const util = require("util");

//reading from db.json

//TODO make Notes class
//TODO constructor
//TODO read and write from file
const readFileAsync = util.promisify(fs.readFile);


class Note {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  saveNote(newNote) {
    return readFileAsync(`${process.cwd()}/db/db.json`, "utf8", (err, data) => {
      //TODO THROWING ERROR
      if (err) throw err;

      //get saved notes
      let notes = JSON.parse(data);

      //give new note id
      let id = notes.length;
      newNote.id = id;

      //add new note to saved notes
      notes.push(newNote);

      //stringify
      //write notes to db.json
      //TODO ENOENT GET PATH FOR DB.JSON
      fs.writeFile(`${process.cwd()}/db/db.json`, notes, (err) => {
        if (err) throw err;
        console.log("file saved!");
      });
    });
  }

  listNote() {
    //WORKING
    console.log("listNote called");
    //read db file
    return readFileAsync(`${process.cwd()}/db/db.json`, "utf8");
  }

  deleteNote() {
    
  }
}

module.exports = Note;