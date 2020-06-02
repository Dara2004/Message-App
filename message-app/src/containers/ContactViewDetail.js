import React from "react";
import { connect } from "react-redux";
import { setActiveId } from "../actions";

//parent: MainWindow
const ContactViewDetail = ({
  activeId,
  contacts,
  selectedContactId,
  setActiveId,
}) => {
  const contactToShow = contacts[selectedContactId];
  const { name, pic, status } = contactToShow;
  const handleClick = () => {
    if (activeId !== contactToShow.user_id) {
      setActiveId(contactToShow.user_id); //dispatch action
    }
  };

  return (
    <div className="welcome-window">
      <img src={pic} alt="" />
      <h1>{name}</h1>
      <h3>Status: {status}</h3>
      <button className="message-btn" onClick={handleClick}>
        Say Hello
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    selectedContactId: state.selectedContactId,
    contacts: state.contacts,
    activeId: state.activeId,
  };
};
export default connect(mapStateToProps, { setActiveId })(ContactViewDetail);
