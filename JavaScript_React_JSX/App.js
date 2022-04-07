//const App = (props) => {
// return(
//        <div className="app">
//            <Welcome name="Alex"/>
//            {books} 
//            </div>
//    )
//}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            item: {},
            dataBook: this.props.dataBook
        }
        this.addBasket = this.addBasket.bind(this);
        this.removeBasket = this.removeBasket.bind(this);
    }

    addBasket(id){
        let newState = Object.assign({}, this.state.items);
        if ( id in newState ){
            newState[id]++;
        } else {
            newState[id] = 1;
        }
        console.log({items: newState})
        this.setState({items: newState});
    }
    removeBasket(id){
        let currentState = Object.assign({}, this.state.items);
        let newItems ={};
        for(let i in currentState){
            if(id != i){
                newItems[id] = currentState[i];            }
        }


        this.setState({items: newItems});
    }

    render() {
        const books = dataBook.map( (book,index) => {
            if( "price" in book ){
                return <Book 
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                price={book.price}
                handleAddBasket={this.addBasket}
            />
            } else {
                return <BookWithoutPrice
                key={book.id}
                title={book.title}
                author={book.author}
            />
            }
        });
        
        return(
            <div className="app">
                <Basket items={this.state.items}
                dataBook={this.state.dataBook}
                handleRemoveBasket={this.removeBasket}
                />

                <SearchInput />

                <hr/>

                <BasketItemCounter counter={5} />

                <hr/>

                <AddBookForm />

                <hr/>

                <Button value="Кнопка" counter={1} />

                <Welcome name="Alex"/>
                {books} 
            </div>
        )
    }
}