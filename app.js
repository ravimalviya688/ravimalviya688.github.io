import React, {Component} from 'react';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name : 'ravi'
		}
	}
	handleclick(){
		this.setState({name:'kavi'});
	}
	render(){
		return(
			<h1 onClick={this.handleclick.bind(this)}>hello {this.state.name}</h1>
			);
	}
}
export default App;