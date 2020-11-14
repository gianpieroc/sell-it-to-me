import { SUCCESS_SET_CONFIG } from "./actionTypes"

const initialState = {}

const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_SET_CONFIG:
      return { ...action.payload }
    default:
      return state
  }
}

export default configReducer
