import { Store } from "gatsby"
import { createStore, applyMiddleware, compose, StoreEnhancer } from "redux"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./rootReducer"
import rootSaga from "./rootSaga"

const sagas = createSagaMiddleware()
const middlewares = [sagas]

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const createAppStore = (preloadedState?: Object): Store => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  sagas.run(rootSaga)
  return store
}

export default createAppStore
