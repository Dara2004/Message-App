import React from "react";

//parent: MainWindow
const WelcomeWindow = ({ user }) => {
  const { name, pic, status } = user;
  return (
    <div className="welcome-window">
      <img src={pic} alt="" />
      <h1>Welcome back {name}!</h1>
      <h3>Status: {status}</h3>
      {/*<button className="message-btn">Message {name}</button>*/}
    </div>
  );
};

export default WelcomeWindow;
