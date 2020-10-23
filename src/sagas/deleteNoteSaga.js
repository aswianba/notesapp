import { put, call } from "redux-saga/effects";
import callAxios from "../api/api";

export default function* deleteNoteSaga(action) {
  try {
    const url = "/notes/" + action.payload.note.id;

    const response = yield call(callAxios, url, {}, "DELETE");

    if (response) {
      yield put({ type: "DELETE_NOTE_SUCCESS", response: "success" });
      yield put({ type: "FETCH_NOTES" });
    } else {
      yield put({
        type: "DELETE_NOTE_FAILURE",
        error: "error in deleting data",
      });
    }
  } catch (e) {
    yield put({ type: "DELETE_NOTE_FAILURE", error: e });
  }
}
