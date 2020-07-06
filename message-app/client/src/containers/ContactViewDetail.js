import React from "react";
import { connect, useSelector } from "react-redux";
import { setActiveId } from "../actions";
import { getProfilePicSrc } from "../utils/functions";
import { Loader } from "../components/Loader";

//parent: MainWindow
const ContactViewDetail = ({
  activeId,
  contacts,
  selectedContactId,
  setActiveId,
  // fetchMessages
}) => {
  const contact = useSelector(state => state.selectedContactId);
  const contactToShow = contacts.contacts[selectedContactId];
  if (contact.loading) {
    return <Loader />
  }
  const { name, pic, status, details } = contactToShow;
  const handleClick = () => {
    if (activeId !== contactToShow.user_id) {
      setActiveId(contactToShow.user_id);
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
    selectedContactId: state.selectedContactId.selectedContactId,
    contacts: state.contacts,
    activeId: state.activeId,
  };
};
export default connect(mapStateToProps, { setActiveId })(ContactViewDetail);
