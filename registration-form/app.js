var express = require("express");
var app = express();
var port = 3000;

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connect to the database
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/collect-info");

// create a database schema
var nameSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String
});

// create a model in the database
var User = mongoose.model("User", nameSchema);

// use sendFile command to show the index.html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// build a Create-Read-Update-Delete endpoint
app.post("/addname", (req, res) => {
  var myData = new User(req.body);
  myData
    .save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});

// module.exports = User;
