import data from "../data";

function randomImage() {
  // get a random number from 170-320
  const randomNumber = Math.floor(Math.random() * 150 + 170);
  return `https://placedog.net/${randomNumber}/${randomNumber}`;
}

const contacts = (state = data.contacts, action) => {
  switch (action.type) {
    case "CREATE_PERSON": {
      return [
        ...state,
        {
          user_id: state.length,
          name: action.name,
          pic: randomImage(),
          status: action.status,
          details: action.details,
        },
      ];
    }
    default: {
      return state;
    }
  }
};

export default contacts;
