const initialState = {
  successMsg: "",
  errorMsg: "",
  inProgress: false,
};

const deleteNoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_NOTE":
      return Object.assign({}, state, {
        inProgress: true,
        errorMsg: "",
        successMsg: "",
      });
    case "DELETE_NOTE_SUCCESS":
      // alert();
      return Object.assign({}, state, {
        inProgress: false,
        errorMsg: "",
        successMsg: action.response,
      });
    case "DELETE_NOTE_FAILURE":
      return Object.assign({}, state, {
        inProgress: false,
        errorMsg: action.error,
        successMsg: "",
      });
    default:
      return state;
  }
};

export default deleteNoteReducer;
