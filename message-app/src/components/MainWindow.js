import React from "react";
import WelcomeWindow from "./WelcomeWindow";
import ChatWindow from "../containers/ChatWindow";
import ContactViewDetail from "../containers/ContactViewDetail";
import { setActiveId } from "../actions";
import { connect } from "react-redux";

//parent: App.js
const MainWindow = ({ user, activeId, selectedContactId, setActiveId }) => {
  console.log("MainWindow... activeId: ", activeId);

  const showContent = () => {
    if (!activeId && !selectedContactId) {
      //if no chat is active, show user's profile
      //default activeId = 0 --> corgi
      return <WelcomeWindow user={user} />;
    } else if (!activeId && selectedContactId) {
      //if a contact is selected -> go to ViewDetail mode
      return <ContactViewDetail />;
    } else if (!selectedContactId && activeId) {
      //Chat mode
      return <ChatWindow activeContactId={activeId} />;
    } else {
      return <h1>POOP</h1>;
    }
  };

  return <div className="main-window">{showContent()}</div>;
};

const mapStateToProps = (state) => {
  return { selectedContactId: state.selectedContactId };
};
export default connect(mapStateToProps, { setActiveId })(MainWindow);
