//const Book = (props) => {
//    const h1Style = {
//       color: "#369",
//       fontFamily: "sans-serif",
//   }
//   let {title, author, price} = props;
//   const formatPrice = price => price? <b>{price}</b>: <del></del>;
//   
//   return (
//       <div className="book">
//           <h3 style={h1Style}>{title}</h3>
//           <p>Author: {author}</p>
//           <p>Price: {formatPrice(price)}</p>
//      </div>
//       )
//}
class Book extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            selected: true
        }
        this.handleClick = this.handleClick.bind(this);
        this.addBasketBook = this.addBasketBook.bind(this);
    }
    componentDidMount(){
        console.log('--','компонент смонтирован')
    }
    componentWillUnMount(){
        console.log('--','компонент будет демонтирован')
    }
    handleClick(e){
        e.preventDefault();
        this.setState({selected: !this.state.selected})
    }
    addBasketBook(e){
        e.preventDefault();
        this.props.handleAddBasket(this.props.id)

    }
    render (){
    const h1Style = {
        color: "#369",
        fontFamily: "sans-serif",
    }
    let {title, author, price} = this.props;
    const formatPrice = price => price? <b>{price}</b>: <del></del>;
    const statusBook = (this.state.selected ? 'book-selected' : 'book-default');
    return (
        <div className={"book" + statusBook}>
            <h3 style={h1Style}>{title}</h3>
            <p>Author: {author}</p>
            <p>Price: {formatPrice(price)}</p>
            <a href="#" className = "btn btn-primary" onClick={this.handleClick}>Сравнить</a> &nbsp;
            <a href="#" className = "btn btn-primary" onClick={this.addBasketBook}>В корзину</a>
        </div>
        )
    }
}
