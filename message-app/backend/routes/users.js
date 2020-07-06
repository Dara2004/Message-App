var express = require('express');
var router = express.Router();
const User = require('../models/user.js');


/* GET user by id. */
router.get('/:_id', async function (req, res, next) {
  const user = await User.findById(req.params.id);
  user = await User.findOne({ name: req.params })
  res.send(user);
});

//get conversation messages
// router.get('/:_id/messages', async function (req, res, next) {
//   const
// });

//create an user
router.get('/', async function (req, res, next) {
  const user = req.body;
})

router.post('/user/create', (req, res, next) => {
  User.create(req.body).then(user => res.send(user)).catch(next);
})


module.exports = router;
