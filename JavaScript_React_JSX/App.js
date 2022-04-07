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
            item: {}
        }
        this.addBasket = this.addBasket.bind(this);
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