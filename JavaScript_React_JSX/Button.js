class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: props.counter,
            color: 'grey'
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleClick(e){
        this.setState({counter: this.state.counter+1});
    }

    handleMouseMove(e){
        console.log(e.clientX, e.clientY, e);
    }

    render(){
        setTimeout(()=>{
            const nextColor = this.state.color == 'grey' ? 'lightyellow' : 'grey';
            this.setState({color: nextColor})
        }, 1000);
        return <button 
        style ={{background: this.state.color}}
        onClick={this.handleClick}
        onMouseMove = {this.handleMouseMove}>
            {this.props.value}
            {this.state.counter}
        </button>
    }
}
//function Button(props){
//    const [counter, setCounter] = React.useState(1);
//    return <button 
//        style ={{background: this.state.color}}
//        onClick={()=>{setCounter(counter+1)}}>
//        {props.value}
//        {counter}
//    </button>
//}