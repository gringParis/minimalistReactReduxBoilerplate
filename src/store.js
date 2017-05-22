
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import * as actions from './actions'
import reducer from './reducer'
// import db from "./lib/db"
let store
console.log(actions)
// this middleware is dedicated to chaining actions
const myMiddleware = (store) => (next) => (action) => {
  next(action)
  const nextState = store.getState()
  console.log(nextState)
  switch (action.type) {
    case 'DUMMY_ACTION':
      {
        console.log('DUMMY_ACTION')
        break
      }
  }
}
if (process.env.NODE_ENV !== 'production') {
  const middleware = applyMiddleware(myMiddleware, createLogger())
  store = createStore(reducer, {}, middleware)
} else {
  const middleware = applyMiddleware(myMiddleware)
  store = createStore(reducer, {}, middleware)
}

export default store
