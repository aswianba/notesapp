const initialState = {
  userName: "",
  isLoggedIn: false,
  inProgress: false,
  error: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TRY_LOGIN":
      return Object.assign({}, state, {
        userName: "",
        isLoggedIn: false,
        inProgress: true,
      });
    case "TRY_LOGIN_SUCCESS":
      return Object.assign({}, state, {
        userName: action.response,
        isLoggedIn: true,
        inProgress: false,
        error: "",
      });
    case "TRY_LOGIN_FAILURE":
      return Object.assign({}, state, {
        userName: "",
        isLoggedIn: false,
        inProgress: false,
        error: action.error,
      });
    default:
      return state;
  }
};

export default loginReducer;
