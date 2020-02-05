//dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

//set up initial port
//var PORT = process.env.PORT || 8080;
const PORT = 8080;
//set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//routing
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//start server listening
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});