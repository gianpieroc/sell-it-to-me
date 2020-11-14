import { combineReducers } from "redux"
import config from "./config/reducer"

export default combineReducers({
  clientConfig: config,
})
