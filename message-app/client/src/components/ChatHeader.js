import React from "react";

//parent: ChatWindow
const ChatHeader = ({ activeContact }) => {
  console.log(activeContact);

  const { name, status, pic } = activeContact;
  return (
    <div className="chat-header">
      <span className="chat-header-pic">
        <img src={pic} alt="" />
      </span>
      <div className="header-name-status">
        <h2 className="header-name">{name}</h2>
        <p className="header-status">{status}</p>
      </div>
    </div>
  );
};

export default ChatHeader;
