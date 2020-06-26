const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConversationSchema = new Schema({
  otherPerson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  messages: [
    {
      authorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      message: String,
    },
  ],
});

const Conversation = mongoose.model("conversation", ConversationSchema);
module.exports = Conversation;
