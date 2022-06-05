import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './storeFabric';

import {
  addBookToBasket,
  removeBookFromBasket,
  changeAuthor,
  changePrice,
  changeTitle
} from './actionCreators';

store.subscribe(()=>{
  console.log(JSON.stringify(store.getState(), null, ' '));
})

store.dispatch(addBookToBasket(3));
store.dispatch(removeBookFromBasket(3));
store.dispatch(addBookToBasket(3));
store.dispatch(addBookToBasket(5));

store.dispatch(changeAuthor('Jhon Doe'))
store.dispatch(changeTitle('JS for 24 hours'))
store.dispatch(changePrice(550))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
