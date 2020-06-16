import React from "react";
import { useState, useRef } from "react";
import { connect } from "react-redux";
import { setTypedMessage, setEditing, deleteMessage } from "../actions";
import { getProfilePicSrc } from "../utils/functions";

//parent: ChatMessages
const ChatMessage = ({
  activeId,
  user,
  message,
  index,
  contacts,
  setTypedMessage,
  setEditing,
  deleteMessage,
}) => {
  const [isDeleteVisible, setDeleteVisible] = useState(false);
  const { text, is_user } = message;
  const del = useRef(null);

  const handleOnclick = (e) => {
    console.log(e.currentTarget);
    console.log(del.current);
    if (e.target === del.current) {
      return;
    }
    if (message.is_user) {
      //only allow update if it's user's message
      setTypedMessage(message.text); //to edit message
      setEditing(index);
    }
  };
  const handleHover = (e) => {
    e.preventDefault();
    if (message.is_user) {
      setDeleteVisible(true);
    }
  };
  const handleUnhover = (e) => {
    e.preventDefault();
    if (message.is_user) {
      setDeleteVisible(false);
    }
  };

  const handleDelete = (e) => {
    setDeleteVisible(false);
    e.preventDefault();
    if (message.is_user) {
      deleteMessage(index, activeId);
    }
  };
  return (
    <>
      <div className={`chat-message ${is_user ? "is-user" : "other-user"}`}>
        <span>
          <img
            className="chat-pic"
            src={
              is_user
                ? getProfilePicSrc(user.pic)
                : getProfilePicSrc(contacts[activeId].pic)
            }
            alt=""
          />
        </span>
        <span
          className={`chat ${is_user ? "is-user" : "other-user"}`}
          onClick={handleOnclick}
          onMouseEnter={handleHover}
          onMouseLeave={handleUnhover}
        >
          {isDeleteVisible ? (
            <button className="delete-btn" onClick={handleDelete} ref={del}>
              x
            </button>
          ) : null}
          {text}
        </span>
        <div style={{ flex: 1 }}></div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
    activeId: state.activeId,
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps, {
  setTypedMessage,
  setEditing,
  deleteMessage,
})(ChatMessage);
