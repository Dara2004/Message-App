const fetchContactBegin = (contactId) => ({
  type: 'FETCH_CONTACT_BEGIN',
  contactId,
})
const fetchContactSuccess = () => ({
  type: 'FETCH_CONTACT_SUCCESS',
})
const fetchContactFailure = error => ({
  type: 'FETCH_CONTACT_FAILURE',
  error,
})

//action creator
export const fetchContactDetail = (contactId) => {
  return async function (dispatch) {
    dispatch(fetchContactBegin(contactId));
    try {
      await fetch(`http://localhost:9000/user/${contactId}`);
      dispatch(fetchContactSuccess());
    }
    catch (err) {
      dispatch(fetchContactFailure(err));
    }
  }
}