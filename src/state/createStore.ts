import { Store } from "gatsby"
import { createStore, applyMiddleware, compose, StoreEnhancer } from "redux"
import sagas from "redux-saga"
import rootReducer from "./rootReducer"

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const createAppStore = (preloadedState?: Object): Store => {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagas))
  )
}

export default createAppStore
