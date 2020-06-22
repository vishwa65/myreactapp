import React from "react";

/*class Welcome extends React.Component{
		render(){
		return (<h1> welcome </h1>)
	}

}*/
let Welcome =(props)=>{
	return (<h1>welcome {props.name}</h1>)
}

export default Welcome;