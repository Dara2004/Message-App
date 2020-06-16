const quotes = ["Hi Corgi you finally added me!", "Woof!"];

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const messages = (state = [], action) => {
  const existingMessages = state[action.messageId];
  switch (action.type) {
    case "CREATE_PERSON": {
      const id = Object.keys(state).length;
      return {
        ...state,
        [id]: [
          {
            is_user: false,
            text: randomQuote(),
          },
        ],
      };
    }
    case "SEND_MESSAGE": {
      //create a new conversation if id is new
      if (!existingMessages) {
        return {
          ...state,
          [action.messageId]: [
            {
              is_user: true,
              text: action.message,
            },
          ],
        };
      } else {
        //add message to existing conversation
        return {
          ...state,
          [action.messageId]: [
            ...existingMessages, //preserve existing messages
            {
              is_user: true,
              text: action.message,
            },
          ],
        };
      }
    }
    case "SET_EDITING": {
      return {
        ...state,
        editing: {
          isEditing: true,
          editedMessageId: action.editedMessageId,
        },
      };
    }
    case "UPDATE_MESSAGE": {
      const newState = { ...state };
      const activeConversation = [...state[action.activeId]];
      newState[action.activeId] = activeConversation;
      activeConversation[state.editing.editedMessageId] = {
        is_user: true,
        text: action.editedText,
      };
      newState.editing = {
        isEditing: false,
        editedMessageId: null, //optional
      };
      return newState;
    }
    case "SET_ACTIVE_ID": {
      return {
        ...state,
        editing: {
          isEditing: false,
        },
      };
    }
    case "DELETE_MESSAGE": {
      const newState = { ...state }; //all messages
      newState[action.activeId] = newState[action.activeId].filter(
        (message, index) => action.messageId !== index
      );
      return newState;
    }
    default:
      return state;
  }
};

export default messages;
