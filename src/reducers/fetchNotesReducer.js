const initialState = {
  notes: [],
  errorMsg: "",
  inProgress: false,
};

const fetchNotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NOTES":
      return Object.assign({}, state, { inProgress: true, errorMsg: false });
    case "FETCH_NOTES_SUCCESS":
      return Object.assign({}, state, {
        notes: action.response,
        inProgress: false,
        errorMsg: false,
      });
    case "FETCH_NOTES_FAILURE":
      return Object.assign({}, state, {
        inProgress: false,
        errorMsg: action.error,
      });
    default:
      return state;
  }
};

export default fetchNotesReducer;
