import React, { useState } from "react";
import Contact from "../containers/Contact";
import { connect } from "react-redux";
import { createPerson } from "../actions";
import { Loader } from "../components/Loader";

//parent: App.js
const ChatList = ({ contacts, createPerson }) => {
  const [isAddPersonVisible, setAddPersonVisible] = useState(false);

  const handleClick = () => {
    setAddPersonVisible((prev) => !prev);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setAddPersonVisible(false);
    createPerson(
      e.target.name.value,
      e.target.status.value,
      e.target.details.value
    );
  };
  if (contacts.loading) {
    return <Loader />
  }
  return (
    <>
      <div className="chat-list">
        {Object.values(contacts.contacts).map((contact, idx) => (
          <Contact contact={contact} key={idx} />
        ))}
        <div style={{ flex: 1 }}></div>
        <h3
          style={{ margin: "0 auto 1em auto", color: "purple" }}
          onClick={handleClick}
        >
          {isAddPersonVisible ? "< Close" : "+ Add a person"}
        </h3>
      </div>
      {isAddPersonVisible && (
        <form
          style={{
            autocomplete: "off",
            position: "absolute",
            bottom: "0px",
            left: "330px",
            display: "flex",
            flexDirection: "column",
            marginLeft: "2em",
          }}
          autocomplete="off"
          onSubmit={handleSubmit}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "2em",
            }}
          >
            <h5 style={{ flex: 1 }}>Name: </h5>
            <input
              style={{ flex: 2.5 }}
              className="chat-input"
              name="name"
              placeholder="add name"
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "2em",
            }}
          >
            <h5 style={{ flex: 1 }}>Status: </h5>
            <input
              style={{ flex: 2.5 }}
              className="chat-input"
              name="status"
              placeholder="add status"
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "2em",
            }}
          >
            <h5 style={{ flex: 1 }}>Details: </h5>
            <input
              style={{ flex: 2.5 }}
              className="chat-input"
              name="details"
              placeholder="add details"
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              justifyItems: "center",
              marginBottom: "2em",
            }}
          >
            <button type="submit" className="input-submit">
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default connect(null, { createPerson })(ChatList);
