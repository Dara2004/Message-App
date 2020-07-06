//send data to activeId reducer
export const setActiveId = (id) => ({
  type: "SET_ACTIVE_ID",
  id,
});

//send data to typedMessage reducer
export const setTypedMessage = (message) => ({
  type: "SET_TYPED_MESSAGE",
  message,
});

export const setSelectedContactId = (contactId) => ({
  type: "SET_SELECTED_CONTACT_ID",
  contactId,
});

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
const quotes = ["Hi Corgi you finally added me!", "Woof!"];

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export const createPerson = (name, status, details) => {
  const pic = randomImage();
  const quote = randomQuote();
  return async function (dispatch) {
    dispatch({ type: "CREATE_PERSON_BEGIN" });
    try {
      const res = await fetch("http://localhost:9000/create-person", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          pic,
          status,
          details,
          quote,
        })
      })
      dispatch({
        type: "CREATE_PERSON_SUCCESS",
        uID: (await res.json())._id,
        name,
        pic,
        status,
        details,
        quote,
      })
    }
    catch (err) {
      console.log(err);
      dispatch({ type: "CREATE_PERSON_FAILURE" });
    }
  }
};
