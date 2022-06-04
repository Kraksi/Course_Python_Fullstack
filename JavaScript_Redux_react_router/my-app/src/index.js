import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import dataBook from './components/data';
import dataBook from './components/data.json';

//import { createStore, combineReducers } from 'redux'

//function counterReducer(state = { value: 0 }, action) {
//  switch (action.type) {
//    case 'counter/incremented':
//      return { value: state.value + 1 }
//    case 'counter/decremented':
//      return { value: state.value - 1 }
//    default:
//      return state
//  }
//}

//function textReducer(state = { text: 0 }, action) {
//  switch (action.type) {
//    case 'text/add+':
//      return { text: state.text + '+' }
//    case 'counter/decremented':
//      return { text: state.text + '-' }
//    default:
 //     return state
//  }
//}

//let store = createStore(counterReducer, textReducer)

//store.subscribe(() => console.log(store.getState()))

//store.dispatch({ type: 'counter/incremented' })
// {value: 1}
//store.dispatch({ type: 'counter/incremented' })
// {value: 2}
//store.dispatch({ type: 'counter/decremented' })
// {value: 1}
//store.dispatch({ type: 'text/add+' })
//store.dispatch({ type: 'text/add+' })
//store.dispatch({ type: 'text/add-' })

import { createStore, combineReducers } from 'redux'

function SReducer(state = 0, action) {
  switch (action.type) {
    case 'set/a':
      return action.value
    default:
      return state
  }
}

function pReducer(state = 0, action) {
  switch (action.type) {
    case 'set/p':
      return action.value
    default:
      return state
  }
}

function nReducer(state = 0, action) {
  switch (action.type) {
    case 'set/n':
      return action.value
    default:
      return state
  }
}
let preloadedState = JSON.parse(localStorage.getItem('mortgage')) ?? {S:1e6, p:7, n:10};

let store = createStore(combineReducers({S:SReducer,p:pReducer,n:nReducer}),preloadedState)

store.subscribe(() => {
  console.log(store.getState())
  localStorage.setItem('mortgage', JSON.stringify(store.getState))
})

store.dispatch({ type: 'set/s', value: 1_000_00 })
store.dispatch({ type: 'set/p', value: 10 })
store.dispatch({ type: 'set/n', value: 15 })
setTimeout(()=>{store.dispatch({type: 'set/s', value: 5_000_000})}, 5000)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dataBook={dataBook} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
