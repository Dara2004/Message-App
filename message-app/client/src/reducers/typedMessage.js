const typedMessage = (state = null, action) => {
  switch (action.type) {
    case "SET_TYPED_MESSAGE": {
      return action.message;
    }
    case "SEND_MESSAGE_BEGIN":
    case "UPDATE_MESSAGE_BEGIN":
    case "SEND_MESSAGE": {
      //to clear out the typedMessage after user hits enter
      return "";
    }
    case "UPDATE_MESSAGE":
      return "";

    case "SET_ACTIVE_ID": {
      //when switch conversation, clear chat input
      return "";
    }
    default:
      return state;
  }
};

export default typedMessage;
