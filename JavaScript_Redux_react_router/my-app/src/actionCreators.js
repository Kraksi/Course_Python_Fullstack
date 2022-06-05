import {
    ADD_BOOK_TO_BASKET,
    REMOVE_BOOK_FROM_BASKET,
    CHANGE_AUTHOR,
    CHANGE_TITLE,
    CHANGE_PRICE
  } from './actions';

export const addBookToBasket = (id) => (
    {type:ADD_BOOK_TO_BASKET,id}
);
export const removeBookFromBasket = (id) => (
    {type:REMOVE_BOOK_FROM_BASKET,id}
);
export const changeAuthor = (author) => (
    {type: CHANGE_AUTHOR, author}
);
export const changeTitle = (tilte) => (
    {type: CHANGE_TITLE, title}
);
export const changePrice = (price) => (
    {type: CHANGE_PRICE, price}
);