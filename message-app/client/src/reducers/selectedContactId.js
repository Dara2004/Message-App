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
    default: {
      return state;
    }
  }
};

export default selectedContactId;
