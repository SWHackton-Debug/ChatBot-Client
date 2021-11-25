import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import chatSaga from "./chatSaga";

function* rootSaga() {
  yield all([authSaga(), chatSaga()]);
}

export default rootSaga;
