import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../components/App";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import Mongoose from "mongoose";
import Cors from "cors";
import User from "../database/userschema";
var port = process.env.PORT || 3000;

const server = express();
server.use(express.static("dist"));

server.use(bodyParser.json());
server.use(Cors());
server.use(bodyParser.urlencoded({ extended: true }));

Mongoose.Promise = global.Promise;
Mongoose.connect("mongodb://localhost:27017/user-info");

// const mongoURI = 'mongodb://localhost:27017/mernloginreg'

// {mongoose
//   .connect(
//     mongoURI,
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err))}

server.use("/users", User);

// create a model in the database
// var User = Mongoose.model("UserInfo", UserSchema);

// server.get("/", (req, res) => {
//   const initialMarkup = ReactDOMServer.renderToString(<App />);

//   res.send(`
//     <html>
//       <head>
//         <title>Sample React App</title>
//       </head>
//       <body>
//         <div id="mountNode">Hello</div>
//         <script src="/main.js"></script>
//       </body>
//     </html>
//   `);
// });

// server.post("/adduser", (req, res) => {
//   var UserData = new User(req.body);
//   UserData.save()
//     .then(item => {
//       res.send("item saved to database");
//     })
//     .catch(err => {
//       res.status(400).send("unable to save to database");
//     });
// });

server.listen(port, function() {
  console.log("Server is running on port: " + port);
});
