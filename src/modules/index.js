import { combineReducers } from "redux";
import counter from "./counter";
import { counterSaga } from "./counter";
import { all } from "redux-saga/effects";

export const rootReducer = combineReducers( {counter} );

export function* rootSaga() {
    yield all([counterSaga()]); //all([]) 배열 내의 모든 사가를 합쳐 rootSaga
  }
