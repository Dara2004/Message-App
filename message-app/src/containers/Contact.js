import React from "react";
import { setActiveId } from "../actions";
import { connect } from "react-redux";

//parent: ChatList
const Contact = ({ contact, activeId, setActiveId }) => {
  const { pic, name, status } = contact;
  const handleClick = () => {
    if (activeId !== contact.user_id) {
      console.log(contact.user_id);
      setActiveId(contact.user_id); //dispatch action
    }
  };
  return (
    <div
      className={`contact ${contact.user_id === activeId ? "isActive" : ""}`}
      onClick={handleClick}
    >
      <img src={pic} alt={name} />
      <div className="contact-details">
        <p className="contact-name">{name}</p>
        <p className="contact-status">{status}</p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    activeId: state.activeId,
  };
};
export default connect(mapStateToProps, { setActiveId })(Contact);
