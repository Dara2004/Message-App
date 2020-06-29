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
        return {
          ...state,
          loading: false,
          error: null,
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
    case "UPDATE_MESSAGE_BEGIN": {
      return {
        ...state,
        loading: true,
      }
    }
    case "UPDATE_MESSAGE_SUCCESS": {
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
      return {
        ...newState,
        loading: false,
        error: null
      }
    }
    case "UPDATE_MESSAGE_FAILURE": {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }
    case "DELETE_MESSAGE_BEGIN": {
      return {
        ...state,
        loading: true,
      }
    }
    case "DELETE_MESSAGE_SUCCESS": {
      const newState = { ...state, loading: false, error: null }; //all messages
      newState[action.activeId] = newState[action.activeId].filter(
        (m, index) => action.messageId !== index
      );
      return newState;
    }
    case "DELETE_MESSAGE_FAILURE": {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }
    case "CREATE_PERSON_SUCCESS": {
      const id = Object.keys(state).length;
      return { //create a default initial message
        ...state,
        [id]: [
          {
            is_user: false,
            text: action.quote,
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
    case "SET_ACTIVE_ID": {
      return {
        ...state,
        editing: {
          isEditing: false,
        },
      };
    }
    default:
      return state;
  }
};

export default messages;
