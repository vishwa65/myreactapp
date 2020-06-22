import React,{useState} from 'react';
let FunComp=(p)=>{
	const [count,changeCount]=useState(0);
	return(
		<div> <h1>This is FunCom</h1>
				<h2>{p.name}</h2>
				
		</div>
		)
}
export default FunComp;