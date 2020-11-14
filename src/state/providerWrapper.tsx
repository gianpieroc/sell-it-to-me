import React, { ComponentType, useEffect } from "react"
import { Provider, useDispatch } from "react-redux"
import { setConfig } from "./config/actions"
import createStore from "./createStore"

const store = createStore()

const Config = ({ children }: any) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setConfig("default"))
  }, [])

  return children
}

export default ({ element }) => {
  const store = createStore()
  return (
    <Provider store={store}>
      <Config>{element}</Config>
    </Provider>
  )
}
