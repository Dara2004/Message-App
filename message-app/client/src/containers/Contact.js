import React from "react";
import { setSelectedContactId } from "../actions";
import { connect } from "react-redux";
import { getProfilePicSrc } from "../utils/functions";
import { fetchContactDetail } from "../actions/contacts";

//parent: ChatList
const Contact = ({ contact, activeId, fetchContactDetail }) => {
  const { pic, name, status } = contact;

  const handleClick = () => {
    fetchContactDetail(contact.user_id);
  };

  return (
    <div
      className={`contact ${contact.user_id === activeId ? "isActive" : ""}`}
      onClick={handleClick}
    >
      <img src={getProfilePicSrc(pic)} alt={name} />
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
export default connect(mapStateToProps, { fetchContactDetail })(Contact);
