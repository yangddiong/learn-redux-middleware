import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';

const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE';
const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';


export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

const initialState = 0;

function* increaseSaga() {
    yield delay(1000); 
    yield put(increase());  //put을 이용해 새로운 액션을 디스패치
  }
  function* decreaseSaga() {
    yield delay(1000); 
    yield put(decrease()); 
  }

  export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSaga); // 모든 INCREASE_ASYNC 액션을 처리
    yield takeLatest(DECREASE_ASYNC, decreaseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
  }

function counter(state = initialState, action){
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
};

export default counter;

