import React from "react";
import { connect } from "react-redux";
import { setTypedMessage, sendMessage, updateMessage } from "../actions";

//parent: ChatWindow
const ChatInput = ({
  typedMessage,
  activeId,
  messages,
  setTypedMessage,
  sendMessage,
  updateMessage,
}) => {
  const handleSubmit = (e) => {
    const editing = messages.editing;
    e.preventDefault(); //to prevent page to reload after form is submitted
    //if message is new message (not edited)
    if (typedMessage !== "") {
      if (!editing.isEditing) {
        sendMessage(typedMessage, activeId);
      } else {
        updateMessage(typedMessage, activeId);
      }
    }
  };
  const handleChange = (e) => {
    setTypedMessage(e.target.value);
  };
  return (
    <form className="chat-form" onSubmit={handleSubmit}>
      <input
        className="chat-input"
        onChange={handleChange}
        value={typedMessage}
        placeholder="Type a message"
      />
      <button className="input-submit" onSubmit={handleSubmit}>
        Send
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    typedMessage: state.typedMessage,
    activeId: state.activeId,
    messages: state.messages,
  };
};

export default connect(mapStateToProps, {
  setTypedMessage,
  sendMessage,
  updateMessage,
})(ChatInput);
