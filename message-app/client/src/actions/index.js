//send data to activeId reducer
export const setActiveId = (id) => ({
  type: "SET_ACTIVE_ID",
  id,
});

//send data to typedMessage reducer
export const setTypedMessage = (message) => ({
  type: "SET_TYPED_MESSAGE",
  message,
});

//send data to editing reducer
export const setEditing = (editedMessageId) => ({
  type: "SET_EDITING",
  editedMessageId,
});


export const setSelectedContactId = (contactId) => ({
  type: "SET_SELECTED_CONTACT_ID",
  contactId,
});

export const createPerson = (name, status, details) => ({
  type: "CREATE_PERSON",
  name,
  status,
  details,
});
