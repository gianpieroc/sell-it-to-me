import { all, put, takeLatest } from "redux-saga/effects"
import { ConfigType } from "../../config/types"
import { failSetConfig, setConfig, successSetConfig } from "./actions"
import { START_SET_CONFIG } from "./actionTypes"

const defaultFileName = "default"

function* setConfigSaga({ payload = defaultFileName }) {
  try {
    const fileName = payload
    console.log(payload)
    const configImported = yield import("../../config/" + fileName + ".ts")
    const configFile = configImported.default
    yield put(successSetConfig(configFile))
  } catch (error) {
    yield put(failSetConfig(error.message))
  }
}

export default function* configSagas() {
  // @ts-ignore
  yield all([takeLatest(START_SET_CONFIG, setConfigSaga)])
}
