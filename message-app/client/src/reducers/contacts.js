const dogImages = [
  "dog1.jpg",
  "dog2.jpg",
  "dog3.jpg",
  "dog4.jpg",
  "dog5.jpg",
  "dog6.jpg",
];
function randomImage() {
  // get a random img from dogImages, index 0-5
  return dogImages[Math.floor(Math.random() * dogImages.length)];
}

const contacts = (state = [], action) => {
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
