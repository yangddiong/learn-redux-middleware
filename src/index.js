import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import counter from './modules/counter';
import {rootReducer, rootSaga} from './modules/index';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(ReduxThunk, sagaMiddleware, logger));
//const store = createStore(counter, 12, composeWithDevTools()); //이게 안되는 이유 => store은 생성되고 있으나 reducer가 제대로 구동되지 않는듯??

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
