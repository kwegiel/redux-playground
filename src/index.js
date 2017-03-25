// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';



// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
const mathReducer = (state = {
  result: 1,
  lastValues: [],
}, action) => {
  switch (action.type) {
    case "ADD":
        state = {
          ...state,
          result: state.result + action.payload,
          lastValues: [...state.lastValues, action.payload]
        }
        break;
    case "SUBSTRACT":
        state = {
          ...state,
          result: state.result - action.payload,
          lastValues: [...state.lastValues, action.payload]
        }
        break;
    default:
        break;
  }
  return state;
};

const userReducer = (state = {
  name: "Krisu",
  age: 33
}, action) => {
  switch (action.type) {
    case "SET_NAME":
        state = {
          ...state,
          name: action.payload
        }
        break;
    case "SET_AGE":
        state = {
          ...state,
          age: action.payload          
        }
        break;
    default:
        break;
  }
  return state;
};
const myLogger = (store) => (next) => (action) => {
  console.log("Logged action: ", action);
  next(action);
};

const store = createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(myLogger, logger()));

store.subscribe(() => {
  console.log("Store update", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 100
});
store.dispatch({
  type: "ADD",
  payload: 15
});
store.dispatch({
  type: "SUBSTRACT",
  payload: 50
});
store.dispatch({
  type: "SET_NAME",
  payload: "Katrina"
});
store.dispatch({
  type: "SET_AGE",
  payload: 30
});
