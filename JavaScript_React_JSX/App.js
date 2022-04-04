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
        const books = dataBook.map( (book,index) => <Book
        key={index}
        title={book.title}
        author={book.author}
        price={book.price}
/>
);
        return(
            <div className="app">
                <Welcome name="Alex"/>
                {books} 
            </div>
        )
    }
}