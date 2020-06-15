import data from "../data";

const activeId = (state = data.activeId, action) => {
  switch (action.type) {
    case "SET_ACTIVE_ID": {
      return action.id; //this reducer only controls this part of the state
    }
    case "SET_SELECTED_CONTACT_ID": {
      return null;
    }
    default:
      return state;
  }
};

export default activeId;
