const mongoose = require("mongoose");
//mocha runs the file with before and beforeEach first (before every thing else) regardless of the alphabetical order
//hook: a function which tells mocha to run this (and make sure it's completed) before or after the tests
before(() => {
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
});

//drop the collection before each test to start fresh
// beforeEach((done) => {
//   // mongoose.connection.collections.users.drop(() => {
//   //   done();
//   // });
//   //mongoose pularize our model (to users) since it assume there is more than 1 colleciton with this model
//   mongoose.connection.collections.messages.drop(() => {
//     done();
//   });
// });

after(async () => {
  console.log("closing connection");
  await mongoose.connection.close(); //or return mongoose.connection.close()
  console.log("connection closed");
});
