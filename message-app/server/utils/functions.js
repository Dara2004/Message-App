// const mongoose = require("mongoose");
const User = require("../models/user");
const Conversation = require("../models/conversation");

//User methods
const createUser = async (user) => {
  const newUser = await User.create(user);
  createConversation(newUser);
};

//Conversation methods
const createConversation = async (newUser) => {
  const conversation = await Conversation.create({
    otherPerson: newUser,
    messages: [],
  });
  return conversation;
};

const addMessageToConversation = async (message) => {
  const matchedconversationID = await Conversation.findOne({
    otherPerson: message.authorID,
  });
  const updatedConversation = await Conversation.findByIdAndUpdate(
    matchedconversationID,
    {
      $push: {
        messages: {
          authorID: message.authorID,
          message,
        },
      },
    }
  );
  return updatedConversation;
};

module.exports = {
  createUser,
  createConversation,
  addMessageToConversation,
};
