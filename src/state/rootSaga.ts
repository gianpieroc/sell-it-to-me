import { fork, all } from "redux-saga/effects"
import getConfig from "./config/sagas"

export default function* rootSaga() {
  yield all([fork(getConfig)])
}
