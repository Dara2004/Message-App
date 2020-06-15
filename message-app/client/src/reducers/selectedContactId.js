import data from "../data";

const selectedContactId = (state = data.selectedContactId, action) => {
  switch (action.type) {
    case "SET_SELECTED_CONTACT_ID": {
      return action.contactId;
    }
    case "SET_ACTIVE_ID": {
      return null;
    }
    default: {
      return state;
    }
  }
};

export default selectedContactId;
