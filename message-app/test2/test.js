const assert = require("assert");
const User = require("../server/models/user");
const Message = require("../server/models/message");

describe("saving records", function () {
  // it("save users", async () => {
  //   //putting async means a function always returns a promise
  //   const corgi = new User({
  //     name: "Corgi",
  //     pic: "../src/corgi.jpg",
  //     status: "Best dog ever",
  //     details: "I am the coolest dog in the world",
  //   });
  //   const michelle = new User({
  //     name: "Michelle Obama",
  //     pic: "../src/michelle-obamay.jpg",
  //     status: "First Lady",
  //     details:
  //       "Here in America, we don't let our differences tear us apart. Not here. Because we know that our greatness comes from when we appreciate each other's strengths, when we learn from each other, when we lean on each other, because in this country, it's never been each person for themselves. No, we're all in this together. We always have been.",
  //   });
  //   const barack = new User({
  //     name: "Barack Obama",
  //     pic: "../src/barack-obama.jpg",
  //     status: "US President",
  //     details:
  //       "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
  //   });
  //   const rihanna = new User({
  //     name: "Rihanna",
  //     pic: "../src/rihanna.jpg",
  //     status: "Musician",
  //     details: "The bottom line is that everyone thinks differently.",
  //   });
  //   const kevin = new User({
  //     name: "Kevin Hart",
  //     pic: "../src/kevin-hart.jpg",
  //     status: "Comedian",
  //     details:
  //       "Laughter heals all wounds, and that's one thing that everybody shares. No matter what you're going through, it makes you forget about your problems. I think the world should keep laughing.",
  //   });

  //   await corgi.save(); //save in user collection in db - this might take a while -an async request
  //   await michelle.save();
  //   await barack.save();
  //   await rihanna.save();
  //   await kevin.save();
  //   //await makes JavaScript wait until that promise settles and returns its result
  //   assert.equal(corgi.isNew, false); //true=created locally not saved in db, false =created and saved to db
  // });

  it("save messages", async () => {
    const m1 = new Message({
      authorID: "5ee5d965b4f3063053b1f752",
      message: "Hello Corgi",
    });
    const m2 = new Message({
      authorID: "5ee5dee17c47ae325c67218f",
      message: "Hi Corgi",
    });
    const m3 = new Message({
      authorID: "5ee5dee17c47ae325c67218d",
      message: "Hi Michelle",
    });
    const m4 = new Message({
      authorID: "5ee5dee17c47ae325c67218d",
      message: "Hi Mr. President!",
    });
    const m5 = new Message({
      authorID: "5ee5dee17c47ae325c67218f",
      message: "How are you?",
    });
    const m6 = new Message({
      authorID: "5ee5dee17c47ae325c67218d",
      message: "Great! Long time no see!",
    });
    await m1.save();
    await m2.save();
    await m3.save();
    await m4.save();
    await m5.save();
    await m6.save();
    // assert.equal(m1.isNew, false);
  });
});
