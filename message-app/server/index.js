const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://m001-student:m001-mongodb-basics@cluster0-wykga.mongodb.net/messageApp?retryWrites=true&w=majority"
); //mongodb will create this db if it has not existed. can connect to multiple dbs
mongoose.connection
  .once("open", function () {
    //once = eventlistener
    console.log("Connection established");
  })
  .on("error", function (err) {
    console.log("Connection error: " + err);
  });
