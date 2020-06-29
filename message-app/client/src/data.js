const michellePic = "michelle-obama.jpg";
const corgiPic = "corgi.jpg";
const barackPic = "barack-obama.jpg";
const rihannaPic = "rihanna.jpg";
const kevinPic = "kevin-hart.jpg";

const data = {
  activeId: null,
  isTyping: false,
  selectedContactId: null,
  typedMessage: "",
  user: {
    user_id: 0,
    name: "Corgi",
    pic: corgiPic,
    status: "Best dog ever",
    details: "I am the coolest dog in the world",
  },
  messages: {
    editing: {
      isEditing: false,
      editedMessageId: null,//id of the message being edited (in the current conversation --from activeId)
    },
    1: [
      {
        is_user: false,
        text: "Hello Corgi",
      },
      {
        is_user: true,
        text: "Hello Michelle!",
      },
    ],
    2: [
      {
        is_user: false,
        text: "Hi Corgi",
      },
      {
        is_user: true,
        text: "Hi Mr. President!",
      },
      {
        is_user: false,
        text: "How are you?",
      },
      {
        is_user: true,
        text: "Great! Long time no see!",
      },
    ],
    3: [
      {
        is_user: false,
        text: "Hi Corgi",
      },
      {
        is_user: true,
        text: "Hi Rihanna!",
      },
      {
        is_user: false,
        text: "How are you?",
      },
      {
        is_user: true,
        text: "Great! Long time no see!",
      },
    ],
    4: [
      {
        is_user: false,
        text: "Hi Corgi",
      },
      {
        is_user: true,
        text: "Hi Kevin!",
      },
      {
        is_user: false,
        text: "How are you?",
      },
      {
        is_user: true,
        text: "Great! Long time no see!",
      },
    ],
  },
  contacts: [
    {
      user_id: 0,
      name: "Corgi",
      pic: corgiPic,
      status: "Best dog ever",
      details: "I am the coolest dog in the world",
    },
    {
      user_id: 1,
      name: "Michelle Obama",
      pic: michellePic,
      status: "First Lady",
      details:
        "Here in America, we don't let our differences tear us apart. Not here. Because we know that our greatness comes from when we appreciate each other's strengths, when we learn from each other, when we lean on each other, because in this country, it's never been each person for themselves. No, we're all in this together. We always have been.",
    },
    {
      user_id: 2,
      name: "Barack Obama",
      pic: barackPic,
      status: "US President",
      details:
        "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
    },
    {
      user_id: 3,
      name: "Rihanna",
      pic: rihannaPic,
      status: "Musician",
      details: "The bottom line is that everyone thinks differently.",
    },
    {
      user_id: 4,
      name: "Kevin Hart",
      pic: kevinPic,
      status: "Comedian",
      details:
        "Laughter heals all wounds, and that's one thing that everybody shares. No matter what you're going through, it makes you forget about your problems. I think the world should keep laughing.",
    },
  ],
};

export default data;
