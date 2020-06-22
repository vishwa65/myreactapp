import React from 'react';
import data from './data/data.json';
import profilepic from './index.png';


export default function Resume(props){

		fetch('https://jsonplaceholder.typeicode.com/posts')
		.then(response=>response.json())
		.then(data=>console.log(data))

		let info=data.profile[props.location.data.id]
		console.log(info.career)




	return(


		<div className="row justify-content-center">


			
			<div className="col-lg-3 m-2">

					<div className="card shadow">

						<div className="card-body text-center">
							<img src={profilepic} alt="profile icon"style={{width:"30%"}}/>
							<h2>{info.basics.name}</h2>
							<h2>{info.basics.role}</h2>
							<a href={"tel:"+info.basics.phone}>
								<h2>{info.basics.phone}</h2>
							</a>
							<a href={"mailto:"+info.basics.mail}>
								<h2>{info.basics.email}</h2>
							</a>


						</div>


					</div>


			</div>

			

			<div className="col-lg-8 m-2">

					<div className="card shadow">

						<div className="card-body">

								<h2>career object:</h2>
								<hr/>
								<p>{info.career}</p>
								<h2>Educational details</h2>
								<table className="table">
				
									<tr>
										<th>S.NO</th><th>Institute</th><th>Course</th><th>Y.O.P</th><th>Percentage</th>
									</tr>
				
									<tr>
										<td>1</td><td>RGUKT</td><td>PUC2</td><td>2018</td><td>90</td>
									</tr>
									<tr>
										<td>2</td><td>RGUKT</td><td>PUC1</td><td>2017</td><td>90</td>
									</tr>
									<tr>
										<td>2</td><td>M.E.M school</td><td>SSC</td><td>2016</td><td>90</td>
									</tr>

								</table>
								
								<h2>Skills</h2>
										<ol>
  												<li>C</li>
  												<li>Java</li>
  												<li>HTML</li>
  												<li>CSS</li>
  												<li>JavaScript</li>
  												<li>python</li>
										</ol>
								<h2>Hobbies</h2>
										<ul>
												<li> Reading</li>
												<li>Surf The Web</li>
												<li>Play Board Games</li>
												<li>Listening songs</li>
										</ul>

						</div>


					</div>


			</div>

		</div>


		)

}