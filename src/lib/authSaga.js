import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "./api";
import { getInit } from "../modules/auth";

function* Init() {
  try {
    const res = yield call(api.init);
    yield put(getInit(res));
  } catch (e) {
    console.log(e);
  }
}

function* authSaga() {
  yield takeLatest("auth/INIT", Init);
}

export default authSaga;
