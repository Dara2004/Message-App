const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema and model
const UserSchema = new Schema({
  user_id: Number,
  name: String,
  pic: String,
  status: String,
  details: String,
});

//when a new user created, put it in user collection, according to UserSchema
const User = mongoose.model("user", UserSchema); //'user = name of the collection

module.exports = User;
