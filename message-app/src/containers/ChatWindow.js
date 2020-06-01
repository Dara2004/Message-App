import React from "react";
import ChatHeader from "../components/ChatHeader";
import ChatMessages from "../components/ChatMessages";
import { connect } from "react-redux";
import ChatInput from "./ChatInput";

//parent: MainWindow
const ChatWindow = ({ contacts, messages, activeContactId }) => {
  const activeContact = contacts[activeContactId];
  const activeMessages = messages[activeContactId];
  return (
    <div className="chat-window">
      <ChatHeader activeContact={activeContact} />
      <ChatMessages messages={activeMessages} />
      <ChatInput />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { contacts: state.contacts, messages: state.messages };
};
export default connect(mapStateToProps)(ChatWindow);
