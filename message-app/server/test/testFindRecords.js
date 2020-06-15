// const assert = require("assert");
// const User = require("../models/user");

// describe("finding records", () => {
//   let user;
//   beforeEach((done) => {
//     user = new User({
//       name: "Bill Gates",
//     });
//     user.save();
//     done();
//   });
//   //   it("find a user by name", async () => {
//   //     const result = await User.findOne({ name: "Bill Gates" });
//   //     assert.equal(result.name, "Bill Gates");
//   //   });
//   it("find a user by id", async () => {
//     const result = await User.findOne({ _id: user._id });
//     assert.equal(result._id.toString(), user._id.toString());
//   });
// });
