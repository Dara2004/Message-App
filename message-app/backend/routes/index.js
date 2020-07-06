var express = require('express');
var router = express.Router();
const User = require('../models/user.js');
const Conversation = require('../models/conversation.js');

const userID = "5ef836334aba68384c81062d";

const getInitialUsers = async () => {
  const initialUsers = await User.find();
  return initialUsers;
}

const getInitialConversations = async () => {
  const initialConversations = await Conversation.find();
  return initialConversations;
}
/* GET intial data from mongoDB */
router.get('/', async function (req, res, next) {
  const users = await getInitialUsers();
  const conversations = await getInitialConversations();
  const obj = { users, conversations };
  res.send(obj);
});

//get user by id
router.get('/user/:id', async function (req, res, next) {
  const user = await User.findById(req.params.id);
  await new Promise(r => setTimeout(r, 2000));
  res.send(user);
});

//create a person
router.post('/create-person', async function (req, res) {
  const newUser = await User.create({
    name: req.body.name,
    pic: req.body.pic,
    status: req.body.status,
    details: req.body.details
  });
  // console.log(newUser);
  const newMessage = {
    authorID: newUser._id,
    message: req.body.quote,
  }
  const newMsg = await Conversation.create({
    otherPerson: newUser._id,
    messages: [newMessage]
  });
  console.log(newMsg);
  res.send(newUser);
});

//MESSAGES
//create new message and save in db
router.post('/messages/:id', async function (req, res) {
  const corgi = await User.findOne({ name: "Corgi" });
  const newMessage = { authorID: corgi._id, message: req.body.message };
  try {
    await Conversation.findOneAndUpdate({ otherPerson: req.params.id }, {
      $push: {
        messages: newMessage
      }
    })
  } catch { //if conversation doesnt exist, create one
    await Conversation.create({
      otherPerson: req.params.id,
      messages: [newMessage]
    })
  }
  res.send(newMessage);
})

//update selected message
router.put('/messages/:id', async function (req, res) {
  const editedMsgId = req.body.editedMessageId;
  try {
    const currConversation = await Conversation.findOne({ otherPerson: req.params.id });
    const toBeEdited = currConversation.messages[editedMsgId];
    toBeEdited.message = req.body.editedText; //can't use update since update() can only be called on model (eg: Conversation.update())
    await currConversation.save();
    res.send(toBeEdited);
  }
  catch (err) {
    console.log(err);
  }
})

//delete selected message
router.delete('/messages/:id', async function (req, res) {
  const delMsgId = req.body.messageId;
  console.log(delMsgId);
  try {
    const currConversation = await Conversation.findOne({ otherPerson: req.params.id });
    currConversation.messages.splice(delMsgId, 1);
    console.log(currConversation);
    await currConversation.save();
    res.send("Message deleted");
  }
  catch (err) {
    console.log(err);
  }
})
module.exports = router;
