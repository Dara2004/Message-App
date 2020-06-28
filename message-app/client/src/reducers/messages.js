const quotes = ["Hi Corgi you finally added me!", "Woof!"];

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const initialState = {
  editing: {
    isEditing: false,
    editedMessageId: null,
  },
  loading: false,
  error: null,
}
const messages = (state = initialState, action) => {
  const existingMessages = state[action.messageId];
  switch (action.type) {
    case "SEND_MESSAGE_BEGIN": {
      return {
        ...state,
        loading: true,
      }
    }
    case "SEND_MESSAGE_SUCCESS": {
      //create a new conversation if id is new
      if (!existingMessages) {
        return {
          ...state,
          loading: false,
          error: null,
          [action.messageId]: [
            {
              is_user: true,
              text: action.message,
            },
          ],
        };
      } else {
        //add message to existing conversation
        console.log(action.message);
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
    case "SEND_MESSAGE_ERROR": {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }
    case "CREATE_PERSON": {
      const id = Object.keys(state).length;
      return { //create a default initial message
        ...state,
        [id]: [
          {
            is_user: false,
            text: randomQuote(),
          },
        ],
      };
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
