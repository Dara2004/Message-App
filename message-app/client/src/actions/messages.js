
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
        body: JSON.stringify({
          message
        })
      });
      dispatch({
        type: "SEND_MESSAGE_SUCCESS",
        message: (await response.json()).message,
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
//send data to editing reducer
export const setEditing = (editedMessageId) => ({
  type: "SET_EDITING",
  editedMessageId,
});
export const updateMessage = (editedText, activeId) => {
  return async function (dispatch, getState) {
    const editedMessageId = await getState().messages.editing.editedMessageId;
    dispatch({ type: "UPDATE_MESSAGE_BEGIN" });
    try {
      const response = await fetch(`http://localhost:9000/messages/${activeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          editedMessageId,
          editedText
        })
      });
      dispatch({
        type: "UPDATE_MESSAGE_SUCCESS",
        editedText: (await response.json()).message,
        activeId,
      })
    } catch (error) {
      dispatch({
        type: "SEND_MESSAGE_FAILURE",
        error: error,
      })
    }
  }
};
export const deleteMessage = (messageId, activeId) => {
  return async function (dispatch) {
    dispatch({ type: "DELETE_MESSAGE_BEGIN" });
    try {
      await fetch(`http://localhost:9000/messages/${activeId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messageId
        })
      });
      dispatch({
        type: "DELETE_MESSAGE_SUCCESS",
        messageId,
        activeId,
      })
    } catch (error) {
      dispatch({
        type: "DELETE_MESSAGE_FAILURE",
        error: error,
      })
    }
  }
};
