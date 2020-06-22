import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/data.json';
import './css/bootstrap.min.css';
import profilepic from './index.png';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume from './Resume';
function App() {
/*let profiles=data.profile;
console.log(profiles);
return (
<div className="row justify-content-center">

{profiles.map((value)=>(
<div className="col-lg-4 col-md-4 col-sm-10 mt-5">

<div className="card" style={{width:"25rem",fontStyle:"italic",boxShadow:"0px 8px 8px -8px #000"}}>
<img src={profilepic} />
<div className="card-body text-center">
<h1>{value.basics.name}</h1>
<div className="card-text">
<h4> {value.basics.role}</h4>
</div>
<a href={"tel"+value.basics.phone}>{value.basics.phone}</a><br/>
<a href={"mailto"+value.basics.email}>{value.basics.email}</a>
</div>
</div>


</div>))
}


</div>
)*/
return(
	<BrowserRouter>
		<Route exact path='/' component={Home}/>
		<Route exact path='/resume' component={Resume}/>


	</BrowserRouter>



	);

}


let Home=()=>{
	let profiles =data.profile;
	console.log(profiles);
	return(
		<div className="row justify-content-center">
			{profiles.map((values,index)=>(
				<div className="col-lg-4 col-md-4 col-sm-10 mt-1" key={index}>
				<div className="card ">
					<div className="card-body text-center">

					<img src={profilepic} alt="profile icon"style={{width:"30%"}}/>
					<h2>{values.basics.name}</h2>
					<h2>{values.basics.role}</h2>
					<a href={"tel:"+values.basics.phone}>
					<h2>{values.basics.phone}</h2>
					</a>
					<a href={"mailto:"+values.basics.mail}>
					<h2>{values.basics.email}</h2>
					</a>
					<Link to={{pathname:'/resume',data:{id:index}}} className="btn btn-primary">view profile</Link>
					</div>			
				</div>
				</div>
				))}


		</div>
	)
}






export default App;