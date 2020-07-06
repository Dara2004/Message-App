import React, { useEffect, useRef } from "react";
import ChatMessage from "../containers/ChatMessage";
import { Loader } from "../components/Loader"

//parent: ChatWindow
const ChatMessages = ({ messages }) => {
  const el = useRef(null); //direct dom manipulation, returns a pointer/ref to the phisical DOM element
  useEffect(() => {
    // componentDidMount() = component rendered, componentWillUpdate() if things in [ ] changes
    //if nothing is passed to 2nd argument = undefined -> callback is called on every update
    el.current.scrollTop = el.current.scrollHeight;
  }, [messages]);

  if (messages.loading) {
    return <Loader />
  }
  console.log(messages);
  return (
    <div className="chat-messages" ref={el}>
      {messages.map((m, idx) => (
        <ChatMessage message={m} index={idx} key={idx}></ChatMessage>
      ))}
    </div>);
};
export default ChatMessages;
