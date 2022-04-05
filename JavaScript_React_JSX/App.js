//const App = (props) => {
// return(
//        <div className="app">
//            <Welcome name="Alex"/>
//            {books} 
//            </div>
//    )
//}

class App extends React.Component {
    render() {
        const books = dataBook.map( (book,index) => {
            if( "price" in book ){
                return <Book 
                key={index}
                title={book.title}
                author={book.author}
                price={book.price}
            />
            } else {
                return <BookWithoutPrice
                key={index}
                title={book.title}
                author={book.author}
            />
            }
        });
        
        return(
            <div className="app">

                <Button value="Кнопка" counter={1} />

                <Welcome name="Alex"/>
                {books} 
            </div>
        )
    }
}