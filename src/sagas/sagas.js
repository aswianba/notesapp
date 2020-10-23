import loginSaga from "./loginSaga";
import { takeLatest } from "redux-saga/effects";

export default function* saga() {
  yield takeLatest("TRY_LOGIN", loginSaga);
}
