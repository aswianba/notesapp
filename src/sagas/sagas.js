import fetchNotesSaga from "./fetchNotesSaga";
import addNoteSaga from "./addNoteSaga";
import deleteNoteSaga from "./deleteNoteSaga";
import loginSaga from "./loginSaga";
import { takeLatest } from "redux-saga/effects";

export default function* saga() {
  yield takeLatest("FETCH_NOTES", fetchNotesSaga);
  yield takeLatest("ADD_NOTE", addNoteSaga);
  yield takeLatest("DELETE_NOTE", deleteNoteSaga);
  yield takeLatest("TRY_LOGIN", loginSaga);
}
