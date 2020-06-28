import React from "react";
import WelcomeWindow from "./WelcomeWindow";
import ChatWindow from "../containers/ChatWindow";
import ContactViewDetail from "../containers/ContactViewDetail";
import { setActiveId } from "../actions";
import { connect } from "react-redux";

//parent: App.js
const MainWindow = ({ user, activeId, selectedContactId, setActiveId }) => {


  const showContent = () => {
    if (selectedContactId && activeId) {
      return <ChatWindow activeContactId={activeId} />;
    }
    else if (!activeId && !selectedContactId) {
      return <WelcomeWindow user={user} />;
    } else if (!activeId && selectedContactId) {
      //if a contact is selected -> go to ViewDetail mode
      return <ContactViewDetail />;
    }
  };

  return <div className="main-window">{showContent()}</div>;
};

const mapStateToProps = (state) => {
  return { selectedContactId: state.selectedContactId.selectedContactId };
};
export default connect(mapStateToProps, { setActiveId })(MainWindow);
