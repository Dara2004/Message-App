import React from "react";
import WelcomeWindow from "./WelcomeWindow";
import ChatWindow from "../containers/ChatWindow";

//parent: App.js
const MainWindow = ({ user, activeId }) => {
  console.log("MainWindow... activeId: ", activeId);
  const showContent = () => {
    if (!activeId) {
      //if no chat is active, show user's profile
      //default activeId = 0 --> corgi
      return <WelcomeWindow user={user} />;
    } else {
      return <ChatWindow activeContactId={activeId} />;
    }
  };

  return <div className="main-window">{showContent()}</div>;
};

export default MainWindow;
