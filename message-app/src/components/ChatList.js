import React from "react";
import Contact from "../containers/Contact";

//parent: App.js
const ChatList = ({ contacts }) => {
  return (
    <div className="chat-list">
      {contacts.map((contact) => (
        <Contact contact={contact} key={contact.user_id} />
      ))}
    </div>
  );
};

export default ChatList;
