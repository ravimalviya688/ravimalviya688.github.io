import React from 'react';


class Projects extends React.Component{

  render(){  

    return (
     <div class="content_container">
		<div class="main_content_outer d-flex flex-xl-row flex-column align-items-start justify-content-start">

			<div style={{marginTop:'20px'}}>
				<div class="general_info_title" style={{textAlign:'center'}}>Projects</div>
				<div class="row">
					<div class="card" style={{width: '18rem', border:'2px solid'}}>
					  <img class="card-img-top" src="./images/dokkit.png"  height="150" width="200"  alt="Card image cap"/>
					  <div class="card-body">
					    <h5 class="card-title">Dokkit</h5>
					    <p class="card-text">Create your Operation and Maintenance Manuals with a few simple clicks. We use your pre-existing data to automatically create your O&M.</p>
					  </div>
					  <ul class="list-group list-group-flush">
					    <li class="list-group-item">Appril 2018 - Now</li>
					    <li class="list-group-item">Technology:- React,Node</li>
					    <li class="list-group-item">Confedential</li>
					  </ul>
					</div>

					<div class="card" style={{width: '18rem', border:'2px solid'}}>
					  <img class="card-img-top" src="./images/votemix.jpeg"  height="150" width="200"  alt="Card image cap"/>
					  <div class="card-body">
					    <h5 class="card-title">Votemix</h5>
					    <p class="card-text">Votemix is an Application made for musical interaction between people worldwide. Anyone can manage a small event to a large event.And Mnay much more functionality.</p>
					  </div>
					  <ul class="list-group list-group-flush">
					    <li class="list-group-item">Technology:- React, Node, Laravel</li>
					  </ul>
					  <div class="card-body">
					      <a href="http://www.votemix.com" target="_blank" class="card-link">Click Here</a>
					    </div>
					</div>

					<div class="card" style={{width: '18rem', border:'2px solid'}}>
					  <img class="card-img-top" src="./images/fd.jpg"  height="150" width="200"  alt="Card image cap"/>
					  <div class="card-body">
					    <h5 class="card-title">FoodDESK</h5>
					    <p class="card-text">
FoodDESK offers an affordable TOTAL SOLUTION that complies with European legislation on allergen declaration and food safety (HACCP). Save time, energy and money!.</p>
					  </div>
					  <ul class="list-group list-group-flush">
					  	<li class="list-group-item">Feb 2017 - june 2017</li>
					    <li class="list-group-item">Technology:- CodeIgniter</li>
					  </ul>
					  <div class="card-body">
					      <a href="https://www.fooddesk.be" target="_blank" class="card-link">Click Here</a>
					    </div>
					</div>

					<div class="card" style={{width: '18rem', border:'2px solid'}}>
					  <h4 style={{textAlign:'center'}}>Progressing...</h4> 
					  <img class="card-img-top" src="./images/giphy.gif"  height="150" width="200"  alt="Card image cap"/>
					  <div class="card-body">
					    <p class="card-text">I also works on some projects that are based on react,node,codeigniter etc.</p>
					  </div>
					</div>
				</div>
			</div>
		</div>


	</div>
    );
  }
}

export default Projects;

