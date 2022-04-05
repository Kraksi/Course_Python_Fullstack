class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({text: e.target.value});
    }
    render(){
        return (<div>
            <input onChange={this.handleChange} defaultValue={this.state.text} />
            <p>Длина: {this.state.text.length}</p>
        </div>)
    }

}