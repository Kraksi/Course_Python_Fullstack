import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import dataBook from './components/data';
import dataBook from './components/data.json';

import { createStore, combineReducers } from 'redux'

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

function textReducer(state = { text: 0 }, action) {
  switch (action.type) {
    case 'text/add+':
      return { text: state.text + '+' }
    case 'counter/decremented':
      return { text: state.text + '-' }
    default:
      return state
  }
}

let store = createStore(counterReducer, textReducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'counter/incremented' })
// {value: 1}
store.dispatch({ type: 'counter/incremented' })
// {value: 2}
store.dispatch({ type: 'counter/decremented' })
// {value: 1}
store.dispatch({ type: 'text/add+' })
store.dispatch({ type: 'text/add+' })
store.dispatch({ type: 'text/add-' })

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
