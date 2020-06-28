
export const sendMessage = (message, messageId) => {
  //send post req to save new message in db
  return async function (dispatch) {
    dispatch({ type: "SEND_MESSAGE_BEGIN" });
    try {
      const response = await fetch(`http://localhost:9000/messages/${messageId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.parse(message)
      });
      dispatch({
        type: "SEND_MESSAGE_SUCCESS",
        message: response,
        messageId, //activeId
      })
    } catch (error) {
      dispatch({
        type: "SEND_MESSAGE_FAILURE",
        error: error,
      })
    }
  }
};
export const updateMessage = (editedText, activeId) => ({
  type: "UPDATE_MESSAGE",
  editedText,
  activeId,
  //send put req to update message
});
export const deleteMessage = (messageId, activeId) => ({
  type: "DELETE_MESSAGE",
  messageId,
  activeId,
  //send delete request 
});
