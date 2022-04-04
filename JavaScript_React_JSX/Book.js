const Book = (props) => {
    const h1Style = {
       color: "#369",
       fontFamily: "sans-serif",
   }
   let {title, author, price} = props;
   const formatPrice = price => price? <b>{price}</b>: <del></del>;
   
   return (
       <div className="book">
           <h3 style={h1Style}>{title}</h3>
           <p>Author: {author}</p>
           <p>Price: {formatPrice(price)}</p>
      </div>
       )
}
//class Book extends React.Component {
//    render (){
//    const h1Style = {
//        color: "#369",
//        fontFamily: "sans-serif",
//    }
//    let {title, author, price} = this.props;
//    const formatPrice = price => price? <b>{price}</b>: <del></del>;
//    
//    return (
//        <div className="book">
//            <h3 style={h1Style}>{title}</h3>
//            <p>Author: {author}</p>
//            <p>Price: {formatPrice(price)}</p>
//        </div>
//        )
//    }
//}