import React from 'react';


class Skills extends React.Component{

  render(){  

    return (
     <div class="content_container">
		<div class="main_content_outer d-flex flex-xl-row flex-column align-items-start justify-content-start">

			
					<div class="container">
					  <div class="general_info_title" style={{textAlign:'center'}}>Skills</div>
					  <div class="row">
					    <div class="col-md-4">
					    	<div className="skill-box">
					    		<h4>Frontend Skills</h4>
					    		<div>
					    			<ul>
					    				<li>React,Redux, ES-6</li>
					    				<li>React Native</li>
					    				<li>Material Design</li>
					    				<li>HTML/CSS/LESS and SASS</li>
					    				<li>Javascript/jQuery</li>
					    				<li>Bootstrap/AJAX</li>
					    			</ul>
					    		</div>
					    	</div>
					    </div>
					    <div class="col-md-4">
					    	<div className="skill-box">
					    		<h4>Backend Skills</h4>
					    		<div>
					    			<ul>
					    				<li>Node</li>
					    				<li>Expressjs</li>
					    				<li>Authentication OAuth 1.0</li>
					    				<li>API (REST & SOAP)</li>
					    				<li>PHP(Laravel,Codeigniter)</li>
					    			</ul>
					    		</div>
					    	</div>
					    </div>
					    <div class="col-md-4">
					    	<div className="skill-box">
					    		<h4>Database</h4>
					    		<div>
					    			<ul>
					    				<li>MongoDb</li>
					    				<li>MySQL</li>
					    			</ul>
					    		</div>
					    	</div>
					    </div>
					  </div>
					  <div class="row">
					    <div class="col-md-4">
					    	<div className="skill-box">
					    		<h4>Vesion Control</h4>
					    		<div>
					    			<ul>
					    				<li>GIT</li>
					    			</ul>
					    		</div>
					    	</div>
					    </div>
					    <div class="col-md-4">
					    	<div className="skill-box">
					    		<h4>Other Technologies</h4>
					    		<div>
					    			<ul>
					    				<li>Webpack</li>
					    				<li>Babel</li>
					    				<li>Socket</li>
					    				<li>Stripe Payment/Subscriptions</li>
					    				<li>Hnadling JSON Data</li>
					    				<li>Basic Server Handling</li>
					    				<li>...etc</li>
					    			</ul>
					    		</div>
					    	</div>
					    </div>
					  </div>
					  <div class="row">
					  	Note: I have 1.5 yr of experience in MERN stack development and I am flexible with technology. But i will prefer MERN stack.
					  </div>
					</div>
			
		</div>


	</div>
    );
  }
}

export default Skills;

