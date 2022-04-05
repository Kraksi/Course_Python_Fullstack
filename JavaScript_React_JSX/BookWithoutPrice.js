class BookWithoutPrice extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            selected: true
        }
    }
    render (){
    const h1Style = {
        color: "#369",
        fontFamily: "sans-serif",
    }
    let {title, author} = this.props;
    return (
        <div className={"book"}>
            <h3 style={h1Style}>{title}</h3>
            <p>Author: {author}</p>
            <p>Price: <del>&nbsp;</del></p>
        </div>
        )
    }
}