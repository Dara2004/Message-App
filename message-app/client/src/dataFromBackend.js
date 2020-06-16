const michellePic = "michelle-obama.jpg";
const corgiPic = "corgi.jpg";
const barackPic = "barack-obama.jpg";
const rihannaPic = "rihanna.jpg";
const kevinPic = "kevin-hart.jpg";

const dataFromBackend = {
  users: [
    {
      _id: 0,
      name: "Corgi",
      pic: corgiPic,
      status: "Best dog ever",
      details: "I am the coolest dog in the world",
    },
    {
      _id: 1,
      name: "Michelle Obama",
      pic: michellePic,
      status: "First Lady",
      details:
        "Here in America, we don't let our differences tear us apart. Not here. Because we know that our greatness comes from when we appreciate each other's strengths, when we learn from each other, when we lean on each other, because in this country, it's never been each person for themselves. No, we're all in this together. We always have been.",
    },
    {
      _id: 2,
      name: "Barack Obama",
      pic: barackPic,
      status: "US President",
      details:
        "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
    },
    {
      _id: 3,
      name: "Rihanna",
      pic: rihannaPic,
      status: "Musician",
      details: "The bottom line is that everyone thinks differently.",
    },
    {
      _id: 4,
      name: "Kevin Hart",
      pic: kevinPic,
      status: "Comedian",
      details:
        "Laughter heals all wounds, and that's one thing that everybody shares. No matter what you're going through, it makes you forget about your problems. I think the world should keep laughing.",
    },
  ],
  conversations: [
    {
      otherPerson: 1,
      messages: [
        {
          authorID: 1,
          message: "Hello Corgi",
        },
        {
          authorID: 0,
          message: "Hello Michelle!",
        },
      ],
    },
    {
      otherPerson: 2,
      messages: [
        {
          authorID: 2,
          message: "Hi Corgi",
        },
        {
          authorID: 0,
          message: "Hi Mr. President!",
        },
        {
          authorID: 2,
          message: "How are you?",
        },
        {
          authorID: 0,
          message: "Great! Long time no see!",
        },
      ],
    },
    {
      otherPerson: 3,
      messages: [
        {
          authorID: 3,
          message: "Hi Corgi",
        },
        {
          authorID: 0,
          message: "Hi Rihanna!",
        },
        {
          authorID: 3,
          message: "How are you?",
        },
        {
          authorID: 0,
          message: "Great! Long time no see!",
        },
      ],
    },
    {
      otherPerson: 4,
      messages: [
        {
          authorID: 4,
          message: "Hi Corgi",
        },
        {
          authorID: 0,
          message: "Hi Kevin!",
        },
        {
          authorID: 4,
          message: "How are you?",
        },
        {
          authorID: 0,
          message: "Great! Long time no see!",
        },
      ],
    },
  ],
};

export default dataFromBackend;
