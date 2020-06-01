import React from "react";

const NavBar = ({ setView }) => {
  return (
    <div className="navbar">
      <span onClick={() => setView("home")}>Home</span>
      <span onClick={() => setView("about")}>About</span>
    </div>
  );
};

export default NavBar;
