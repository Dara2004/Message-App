const initialState = {
  contacts: {},
  loading: false,
  error: null
};

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PERSON_BEGIN": {
      return {
        ...state,
        loading: true,
        error: null,
      }
    }
    case "CREATE_PERSON_SUCCESS": {
      return {
        loading: false,
        error: null,
        contacts: {
          ...state.contacts,
          [action.uID]: {
            user_id: action.uID,
            name: action.name,
            pic: action.pic,
            status: action.status,
            details: action.details,
          }
        },
      }
    }
    case "CREATE_PERSON_FALURE": {
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    }
    default: {
      return state;
    }
  }
};

export default contacts;
