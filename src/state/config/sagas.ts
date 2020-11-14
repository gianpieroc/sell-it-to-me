import { all, put, takeLatest } from "redux-saga/effects"
import { failSetConfig, successSetConfig } from "./actions"
import { START_SET_CONFIG } from "./actionTypes"

const defaultFileName = "default"

function* setConfigSaga(payload = defaultFileName) {
  try {
    const fileName = payload
    const { default: jsonFile } = yield import(
      "../../config/" + fileName + ".json"
    )
    console.log(jsonFile)
    yield put(successSetConfig(jsonFile))
  } catch (error) {
    yield put(failSetConfig(error.message))
  }
}

export default function* configSagas() {
  yield all([takeLatest(START_SET_CONFIG, setConfigSaga)])
}
