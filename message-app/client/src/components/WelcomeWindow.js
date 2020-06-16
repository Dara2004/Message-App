import React from "react";
import { getProfilePicSrc } from "../utils/functions";

//parent: MainWindow
const WelcomeWindow = ({ user }) => {
  const { name, pic, status, details } = user;
  return (
    <div className="welcome-window">
      <img src={getProfilePicSrc(pic)} alt={pic} />
      <h1>Welcome back {name}!</h1>
      <h3>
        <span style={{ fontWeight: "bolder" }}>Status: </span>
        {status}
      </h3>
      <h3>
        <span style={{ fontWeight: "bolder" }}>Details: </span> {details}
      </h3>
    </div>
  );
};

export default WelcomeWindow;
