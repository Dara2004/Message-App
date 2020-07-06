// const assert = require("assert");
// const User = require("../models/user");
// const Conversation = require("../models/conversation");
// const helpers = require("../utils/functions");

// //run after users were created
// describe("updating records", async () => {
//   it("should add contact to user", async () => {
//     const accountOwner = await User.findOne({ name: "Corgi" });
//     const michelle = await User.findOne({ name: "Michelle Obama" });
//     const barack = await User.findOne({ name: "Barack Obama" });
//     const rihanna = await User.findOne({ name: "Rihanna" });
//     const kevin = await User.findOne({ name: "Kevin Hart" });
//     await helpers.addContactToUser(accountOwner, michelle);
//     await helpers.addContactToUser(accountOwner, barack);
//     await helpers.addContactToUser(accountOwner, rihanna);
//     await helpers.addContactToUser(accountOwner, kevin);
//     assert.equal(User.findOne({ name: "Corgi" }).contacts.length, 4);
//   });
// });
