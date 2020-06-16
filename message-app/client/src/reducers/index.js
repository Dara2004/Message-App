import user from "./user";
import messages from "./messages";
import contacts from "./contacts";
import activeId from "./activeId";
import typedMessage from "./typedMessage";
import selectedContactId from "./selectedContactId";
import { combineReducers } from "redux";

//shape of the obj passed to the combineReducer is the same as the global state
//the value of every key in state object is gotten from the reducer
//the value returned from each reducer is just the value of the
//paricular key in the state obj
export default combineReducers({
  activeId,
  user, //user: user
  messages,
  contacts, //contacts: contacts
  typedMessage,
  selectedContactId,
});
