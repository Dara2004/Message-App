const selectedContactId = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_CONTACT_BEGIN':
      return {
        ...state,
        loading: true,
        selectedContactId: action.contactId,
      }
    case 'FETCH_CONTACT_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
      }
    case 'FETCH_CONTACT_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    // case "SET_SELECTED_CONTACT_ID": {
    //   return {
    //     ...state,
    //     loading: false,
    //     error: action.error,
    //   }
    //   return action.contactId;
    // }
    // case "SET_ACTIVE_ID": {
    //   return null;
    // }
    default: {
      return state;
    }
  }
};

export default selectedContactId;
