import {
    CHANGE_AUTHOR,
    CHANGE_TITLE,
    CHANGE_PRICE
} from '../actions';

//store.dispatch({type:CHANGE_AUTHOR, author: 'Jhon Doe})
//store.dispatch({type:CHANGE_TITLE, title: JS for 24 hours})
//store.dispatch({type:CHANGE_PRICE, price: 350.50})

export const addBookForm = function(state ={},action){
    let newState;
    switch (action.type) {
        case CHANGE_AUTHOR:
            return{
                ...state,
                author: action.author
          };
        case CHANGE_TITLE:
            return{
                ...state,
                title: action.title
            };
        case CHANGE_PRICE:
            return{
                ...state,
                price: action.price
            };
        default:
          return state
      }
}