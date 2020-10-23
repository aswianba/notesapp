import { put, call } from "redux-saga/effects";
import callAxios from "../api/api";

export default function* fetchNotesSaga(action) {
  try {
    const url = "/notes";

    const response = yield call(callAxios, url, {}, "GET");

    if (response) {
      yield put({ type: "FETCH_NOTES_SUCCESS", response: response.data });
    } else {
      yield put({
        type: "FETCH_NOTES_FAILURE",
        error: "error in Fetching data",
      });
    }
  } catch (e) {
    yield put({ type: "FETCH_NOTES_FAILURE", error: e });
  }
}
