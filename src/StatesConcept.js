import React,{Component} from 'react';
class StatesConcept extends Component{
	constructor(){
		super();
		this.state={
			count:0
		}

		
	}
	increase=()=>{
		this.setState({
			count:this.state.count+1
		})
	}
	decrease=()=>{
		this.setState({
			count:this.state.count-1
		})
	}
	render(){
		return(
			<div>
			<h1>{this.state.count}</h1>
			<button onClick={this.increase}>increase</button>
			<button onClick={this.decrease}>decrease</button>
			<h1>{this.props.name} is {this.props.key1}  years old</h1>
			</div>
			)
	}

}
export default StatesConcept;