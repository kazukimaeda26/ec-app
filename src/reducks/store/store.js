import {
  createStore as reduxCreateStore,
  combineReducers
} from "redux"

import { UsersReducer } from "../users/ reducers";
//増えればここが増える。
export default function createStore() {
  return reduxCreateStore(
    combineReducers( {
      users: UsersReducer
      //増えればここが増える。
    })
  )
}