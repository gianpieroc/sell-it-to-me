import {
  FAIL_SET_CONFIG,
  START_SET_CONFIG,
  SUCCESS_SET_CONFIG,
} from "./actionTypes"

export const setConfig = (payload: string) => ({
  type: START_SET_CONFIG,
  payload,
})

export const successSetConfig = payload => ({
  type: SUCCESS_SET_CONFIG,
  payload,
})

export const failSetConfig = (payload: string) => ({
  type: FAIL_SET_CONFIG,
  payload,
})
