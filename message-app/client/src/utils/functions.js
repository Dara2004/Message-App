//convert fetched data from the backend to the format compatible to the front end
const createInitialReduxState = (dataFromBackend) => {
  const accountOwner = dataFromBackend.users.find(u => u.name === "Corgi");
  console.log(dataFromBackend.users);
  const conversations = dataFromBackend.conversations;
  const messages = {
    editing: {
      isEditing: false,
      editedMessageId: null,
    },
    loading: false,
    error: false,
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
  const contacts = {};
  dataFromBackend.users.filter(u => u.name !== "Corgi").map((user) => (contacts[user._id] = {
    user_id: user._id,
    name: user.name,
    pic: user.pic,
    status: user.status,
    details: user.details,
  }));

  return {
    activeId: null,
    isTyping: false,
    selectedContactId: {},
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
