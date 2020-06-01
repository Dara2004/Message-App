import michellePic from "./michelle-obama.jpg";
import corgiPic from "./corgi.jpg";
import barackPic from "./barack-obama.jpg";
import rihannaPic from "./rihanna.jpg";
import kevinPic from "./kevin-hart.jpg";

const data = {
  activeId: null,
  isTyping: false,
  typedMessage: "",
  user: {
    user_id: 0,
    name: "Corgi",
    pic: corgiPic,
    status: "Best dog ever",
  },
  messages: {
    editing: {
      isEditing: false,
      editedMessageId: null,
    },
    1: [
      //message with user_id = 1
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
    },
    {
      user_id: 1,
      name: "Michelle Obama",
      pic: michellePic,
      status: "First Lady",
    },
    {
      user_id: 2,
      name: "Barack Obama",
      pic: barackPic,
      status: "US President",
    },
    {
      user_id: 3,
      name: "Rihanna",
      pic: rihannaPic,
      status: "Singer",
    },
    {
      user_id: 4,
      name: "Kevin Hart",
      pic: kevinPic,
      status: "Comedian",
    },
  ],
};

export default data;
