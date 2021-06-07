import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux"

import thunk from 'redux-thunk';

import {connectRouter, routerMiddleware} from 'connected-react-router'
import { UsersReducer } from "../users/reducers";
//増えればここが増える。
export default function createStore(history) {
  return reduxCreateStore(
    combineReducers( {
      router: connectRouter(history),
      users: UsersReducer
      //増えればここが増える。
    }),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
}