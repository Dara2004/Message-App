var express = require('express');
var router = express.Router();
const User = require('../models/user.js');
const Conversation = require('../models/conversation.js');

const userID = "5ef836334aba68384c81062f";

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
  res.send(user);
});

//create a person
router.post('/create-person', async function (req, res, next) {
  const newUser = await User.create(req.body);
  return newUser;
});

//messages
router.post('/messages', async function (req, res) {
  // const currConversation = await Conversation.findOne({ otherPerson: req.params.id });
  console.log(req.body);
  const newMessage = { athorID: userID, message: req.body };
  try {
    await Conversation.findOneAndUpdate({ otherPerson: req.params.id }, {
      $push: {
        messages: newMessage
      }
    })
  } catch { //if conversation doesnt exist, create one
    Conversation.create({
      otherPerson: req.params.id,
      messages: {
        $push: {
          messages: newMessage
        }
      }
    })
  }

  res.send(newMessage);
})

router.put('/messages/:id', async function (req, res) {
  const updatedMessage = await Conversation.findByIdAndUpdate(req.params.id, req.body);
  return updatedMessage;
})

router.delete('/messages/:id', async function (req, res) {
  await Conversation.findByIdAndDelete(req.params.id, req.body);
})
module.exports = router;
