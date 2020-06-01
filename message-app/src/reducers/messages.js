import data from "../data";

const messages = (state = data.messages, action) => {
  const existingMessages = state[action.messageId];
  switch (action.type) {
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
    case "DELETE_MESSAGE": {
      const newState = { ...state }; //all messages
      newState[action.activeId] = newState[action.activeId].filter(
        (message, index) => action.messageId !== index
      );
      return newState;
    }
    case "SET_ACTIVE_ID": {
      //when switch conversation, clear editing
      return {
        ...state,
        [state.editing]: {
          isEditing: false,
          editedMessageId: null, //optional
        },
      };
    }
    default:
      return state;
  }
};

export default messages;
