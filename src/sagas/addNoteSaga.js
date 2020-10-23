import { put, call } from "redux-saga/effects";
import callAxios from "../api/api";

export default function* addNoteSaga(action) {
  try {
    let url = "/notes";
    let requestMethod = "POST";
    if (action.payload.note.id) {
      url = "/notes/" + action.payload.note.id;
      requestMethod = "PUT";
    }
    const response = yield call(
      callAxios,
      url,
      {},
      requestMethod,
      action.payload.note
    );

    if (response) {
      yield put({ type: "ADD_NOTE_SUCCESS", response: "success" });
      yield put({ type: "FETCH_NOTES" });
    } else {
      yield put({
        type: "ADD_NOTE_FAILURE",
        error: "error in adding data",
      });
    }
  } catch (e) {
    yield put({ type: "ADD_NOTE_FAILURE", error: e });
  }
}
