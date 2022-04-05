class MyButton extends React.Component{
    render(){
        return <button 
        onClick = {this.props.changeCounter}>
            {this.props.value}
        </button>
    }
}


class BasketItemCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = { counter: this.props.counter}
        this.changeCounter = this.changeCounter.bind(this)
    }
changeCounter(delta = 1){
    if(this.state.counter + delta >= 0){
    this.setState({counter: this.state.counter + delta})
    }
}

    render(){
        return (
            <div>
                <MyButton value="-" changeCounter={e => this.changeCounter(-1)} />
                {this.state.counter}
                <MyButton value="+" changeCounter={e => this.changeCounter()} />
            </div>
        )
    }
}