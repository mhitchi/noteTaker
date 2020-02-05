//dependencies
var express = require("express");
var path = require("path");
var app = express();

//set up initial port
var PORT = process.env.PORT || 8080;
//set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routing
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//start server listening
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});