import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import ChatList from "../components/ChatList";
import MainWindow from "../components/MainWindow";
import NavBar from "../components/NavBar";
import About from "../components/About";

//parent: index.js
function App({ contacts, activeId, user }) {
  const [view, setView] = useState("home");

  if (view === "home") {
    return (
      <div className="App">
        <NavBar setView={setView}></NavBar>
        <div className="app-container">
          <ChatList contacts={contacts} />
          <MainWindow user={user} activeId={activeId} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <NavBar setView={setView}></NavBar>
        <About></About>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    activeId: state.activeId,
    user: state.user,
  };
};
export default connect(mapStateToProps)(App);
