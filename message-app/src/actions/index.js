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

//send data to messages reducer
export const sendMessage = (message, messageId) => ({
  type: "SEND_MESSAGE",
  message,
  messageId,
});

//send data to messages reducer
export const updateMessage = (editedText, activeId) => ({
  type: "UPDATE_MESSAGE",
  editedText,
  activeId,
});

//send data to editing reducer
export const setEditing = (editedMessageId) => ({
  type: "SET_EDITING",
  editedMessageId,
});

export const deleteMessage = (messageId, activeId) => ({
  type: "DELETE_MESSAGE",
  messageId,
  activeId,
});
