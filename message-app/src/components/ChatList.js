import React, { useState } from "react";
import Contact from "../containers/Contact";
import { connect } from "react-redux";
import { createPerson } from "../actions";

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
  return (
    <>
      <div className="chat-list">
        {contacts.map((contact) => (
          <Contact contact={contact} key={contact.user_id} />
        ))}
        <div style={{ flex: 1 }}></div>
        <h3
          style={{ margin: "0 auto 1em auto", color: "purple" }}
          onClick={handleClick}
          className="add-person"
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
            left: "310px",
            display: "flex",
            flexDirection: "column",
            marginLeft: "2em",
            backgroundColor: "white",
            padding: "2em",
            borderRadius: "10px 10px 0px 0px",
          }}
          autocomplete="off"
          onSubmit={handleSubmit}
        >
          <h2>Add a person</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "0.5em",
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
              marginBottom: "0.5em",
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
              marginBottom: "1.5em",
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
