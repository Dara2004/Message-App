const assert = require("assert");
const User = require("../models/user");
const Conversation = require("../models/conversation");
// const helpers = require("../utils/functions");

describe("should save records", () => {
  it("should insert users", async () => {
    console.log("inserting users");
    const userExists = await User.exists();
    if (!userExists) {
      await User.insertMany([
        {
          name: "Corgi",
          pic: "../src/corgi.jpg",
          status: "Best dog ever",
          details: "I am the coolest dog in the world",
        },
        {
          name: "Michelle Obama",
          pic: "../src/michelle-obamay.jpg",
          status: "First Lady",
          details:
            "Here in America, we don't let our differences tear us apart. Not here. Because we know that our greatness comes from when we appreciate each other's strengths, when we learn from each other, when we lean on each other, because in this country, it's never been each person for themselves. No, we're all in this together. We always have been.",
        },
        {
          name: "Barack Obama",
          pic: "../src/barack-obama.jpg",
          status: "US President",
          details:
            "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
        },
        {
          name: "Rihanna",
          pic: "../src/rihanna.jpg",
          status: "Musician",
          details: "The bottom line is that everyone thinks differently.",
        },
        {
          name: "Kevin Hart",
          pic: "../src/kevin-hart.jpg",
          status: "Comedian",
          details:
            "Laughter heals all wounds, and that's one thing that everybody shares. No matter what you're going through, it makes you forget about your problems. I think the world should keep laughing.",
        },
      ]);
      //await makes JavaScript wait until that promise settles and returns its result
      console.log("done inserting users");
    } else {
      console.log("not inserting any user");
    }
  });

  ////===========================  save conversations ===============================////

  it("should insert conversations", async () => {
    const accountOwner = await User.find({ name: "Corgi" });
    const accountOwnerID = accountOwner._id;
    const conversationExists = await Conversation.exists();
    if (!conversationExists) {
      console.log("inserting conversations");
      const michelle = await User.find({ name: "Michelle Obama" });
      const michelleID = michelle._id;
      const barack = await User.find({ name: "Barack Obama" });
      const barackID = barack._id;
      const rihanna = await User.find({ name: "Rihanna" });
      const rihannaID = rihanna._id;
      const kevin = await User.find({ name: "Kevin Hart" });
      const kevinID = kevin._id;
      await Conversation.insertMany([
        {
          otherPerson: michelleID,
          messages: [
            { authorID: michelleID, message: "Hello Corgi" },
            { authorID: accountOwnerID, message: "Hello Michelle" },
            { authorID: michelleID, message: "How is it going?" },
            { authorID: accountOwnerID, message: "Great! Long time no see!" },
          ],
        },
        {
          otherPerson: barackID,
          messages: [
            { authorID: barackID, message: "Hello Corgi" },
            { authorID: accountOwnerID, message: "Hello Mr. President!" },
            { authorID: barackID, message: "How are you?" },
            { authorID: accountOwnerID, message: "Great! Long time no see!" },
          ],
        },
        {
          otherPerson: rihannaID,
          messages: [
            { authorID: rihannaID, message: "Hello Corgi" },
            { authorID: accountOwnerID, message: "Hello Rihanna" },
            { authorID: rihannaID, message: "How are you?" },
            { authorID: accountOwnerID, message: "Great! Long time no see!" },
          ],
        },
        {
          otherPerson: kevinID,
          messages: [
            { authorID: kevinID, message: "Hello Corgi" },
            { authorID: accountOwnerID, message: "Hello Kevin" },
            { authorID: kevinID, message: "How it it going?" },
            { authorID: accountOwnerID, message: "Great! Long time no see!" },
          ],
        },
      ]);
      console.log("done inserting messages");
    } else {
      console.log("not inserting any message");
    }
  });
});
