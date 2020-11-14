import { ConfigType } from "../../config/types"
import {
  FAIL_SET_CONFIG,
  START_SET_CONFIG,
  SUCCESS_SET_CONFIG,
} from "./actionTypes"

interface StartSetConfigType {
  type: typeof START_SET_CONFIG
  payload: string
}

interface SuccessSetConfigType {
  type: typeof SUCCESS_SET_CONFIG
  payload: ConfigType
}

interface FailSetConfigType {
  type: typeof FAIL_SET_CONFIG
  payload: string
}

export const setConfig = (payload: string): StartSetConfigType => ({
  type: START_SET_CONFIG,
  payload,
})

export const successSetConfig = (
  payload: ConfigType
): SuccessSetConfigType => ({
  type: SUCCESS_SET_CONFIG,
  payload,
})

export const failSetConfig = (payload: string): FailSetConfigType => ({
  type: FAIL_SET_CONFIG,
  payload,
})
