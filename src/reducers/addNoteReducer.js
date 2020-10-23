const initialState = {
  successMsg: "",
  errorMsg: "",
  inProgress: false,
};

const addNoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return Object.assign({}, state, {
        inProgress: true,
        errorMsg: "",
        successMsg: "",
      });
    case "ADD_NOTE_SUCCESS":
      return Object.assign({}, state, {
        inProgress: false,
        errorMsg: "",
        successMsg: action.response,
      });
    case "ADD_NOTE_FAILURE":
      return Object.assign({}, state, {
        inProgress: false,
        errorMsg: action.error,
        successMsg: "",
      });
    default:
      return state;
  }
};

export default addNoteReducer;
