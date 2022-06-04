import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './storeFabric';

import {
  ADD_BOOK_TO_BASKET,
  REMOVE_BOOK_FROM_BASKET
} from './actions';

store.subscribe(()=>{
  console.log(JSON.stringify(store.getState(), null, ' '));
})

store.dispatch({type:ADD_BOOK_TO_BASKET, id: 3})
store.dispatch({type:ADD_BOOK_TO_BASKET, id: 3})
store.dispatch({type:ADD_BOOK_TO_BASKET, id: 5})
store.dispatch({type:REMOVE_BOOK_FROM_BASKET, id: 3})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Hello</h1>
    {/*<App dataBook={dataBook} />*/}
  </React.StrictMode>
);

reportWebVitals();
