import { put, call, takeLatest /*, delay*/ } from "redux-saga/effects";
import { start, add_counsel, finish, error } from "../modules/chat";
import { send } from "./api";

function* SendMessageSaga(action) {
  try {
    yield put(start());
    const res = yield call(send, action.payload.comment);
    // yield delay(1000);
    yield put(add_counsel(res.data));
    yield put(finish());
  } catch (e) {
    yield put(error(e.response));
  }
}

function* chatSaga() {
  yield takeLatest("chat/ADD", SendMessageSaga);
}

export default chatSaga;
