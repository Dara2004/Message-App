const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConversationSchema = new Schema({
  otherPerson: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  messages: [
    {
      authorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      message: String,
      created: { type: Date, default: () => new Date() },
    },
  ],
});

const Conversation = mongoose.model("conversation", ConversationSchema);
module.exports = Conversation;
