import { put, call } from "redux-saga/effects";
import callAxios from "../api/api";

export default function* loginSaga(action) {
  try {
    const url = "/login";

    //here hardcoding the response from server
    //const response = yield call(callAxios, url, {}, "GET", action.payload);

    const response = {};
    response.data = "aswinanbu";

    if (response) {
      yield put({ type: "TRY_LOGIN_SUCCESS", response: response.data });
    } else {
      yield put({
        type: "TRY_LOGIN_FAILURE",
        error: "username or password is wrong",
      });
    }
  } catch (e) {
    yield put({ type: "TRY_LOGIN_FAILURE", error: e });
  }
}
