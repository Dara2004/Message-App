import React from "react";
import { connect } from "react-redux";
import { setActiveId } from "../actions";
import { getProfilePicSrc } from "../utils/functions";
//parent: MainWindow
const ContactViewDetail = ({
  activeId,
  contacts,
  selectedContactId,
  setActiveId,
}) => {
  const contactToShow = contacts[selectedContactId];
  const { name, pic, status, details } = contactToShow;
  const handleClick = () => {
    if (activeId !== contactToShow.user_id) {
      setActiveId(contactToShow.user_id); //dispatch action
    }
  };

  return (
    <div
      className="welcome-window"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        alignItems: "center",
        marginLeft: "10%",
      }}
    >
      <img src={getProfilePicSrc(pic)} alt={pic} />
      <h1>{name}</h1>
      <h3>
        <span style={{ fontWeight: "bolder" }}>Status: </span> {status}
      </h3>
      <h3>
        <span style={{ fontWeight: "bolder" }}>Details: </span> {details}
      </h3>
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
