import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Button from './components/Button.js';
import Basket from './components/Basket';
import BookWithoutPrice from './components/BookWithoutPrice';
import Footer from './components/Footer';
import SearchForm from './components/SearchForm';
import AddBookForm from './components/AddBookForm';
import Book from './components/Book';
import { Button } from 'reactstrap';

class App extends React.Component{
 
  constructor(props){
    super(props);
    this.addBook = this.addBook.bind(this); 
    this.addBasket = this.addBasket.bind(this); 
    this.removeBasket = this.removeBasket.bind(this); 
  }
  removeBasket(id){
  }  
  addBasket(id){
  }
  addBook(book){
  }
  }
 
  render(){
    const book = this.state.dataBook. map( item => (                         
    item["price"] ?   <Book
    id={item["id"]}
    key={item["id"]}
    title={item["title"]}
    author={item["author"]}
    price={item["price"]}
    handleAddBasket={this.addBasket}
    /> :
    <BookWithoutPrice
    key={item["id"]}
    title={item["title"]}
    author={item["author"]}
    price={item["price"]}
    />
    )
    )
    return <div>
      <Button color="danger">Danger!</Button>
      <Button color="success">Success!</Button>
      <Basket items={this.state.items} dataBook={this.state.dataBook} handleRemoveBasket={this.removeBasket} />
      <AddBookForm handleAddBook={this.addBook}/>
      <SearchForm />
     {book}
    </div>;
  }
}

export default App;
