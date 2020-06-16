// const mongoose = require("mongoose");
const User = require("../models/user");
const Conversation = require("../models/conversation");

//User methods
const createUser = async (user) => {
  const newUser = await User.create(user);
  return newUser;
};

//Conversation methods
const createConversation = async (conversation) => {
  const newConversation = await Conversation.create(conversation);
  return newConversation;
};

const addUserToConversation = async (cID, user) => {
  Conversation.findByIdAndUpdate(cID, { otherPerson: user._id });
};

//used in testUpdateRecords
const addContactToUser = (user, contact) => {
  console.log("adding contact: ", contact._id, "to user: ", user._id);
  return User.findByIdAndUpdate(user._id, {
    $push: {
      contacts: contact._id,
    },
  });
};

module.exports = {
  createUser,
  createConversation,
  addUserToConversation,
  addContactToUser,
};
