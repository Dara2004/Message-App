const createInitialReduxState = (dataFromBackend) => {
  const accountOwner = dataFromBackend.users[0];
  const conversations = dataFromBackend.conversations;
  const messages = {
    editing: {
      isEditing: false,
      editedMessageId: null,
    },
  };
  for (const c of conversations) {
    messages[c.otherPerson] = [];
    for (const m of c.messages) {
      messages[c.otherPerson].push({
        is_user: accountOwner._id === m.authorID,
        text: m.message,
      });
    }
  }
  const contacts = dataFromBackend.users.map((user) => ({
    user_id: user._id,
    name: user.name,
    pic: user.pic,
    status: user.status,
    details: user.details,
  }));
  return {
    activeId: null,
    isTyping: false,
    selectedContactId: null,
    typedMessage: "",
    user: {
      user_id: accountOwner._id,
      name: accountOwner.name,
      pic: accountOwner.pic,
      status: accountOwner.status,
      details: accountOwner.details,
    },
    messages,
    contacts,
  };
};

/**
 *
 * @param {string} pic user.pic from user model
 */
const getProfilePicSrc = (pic) => {
  return process.env.PUBLIC_URL + "/profile_pics/" + pic;
};

module.exports = {
  createInitialReduxState,
  getProfilePicSrc,
};
