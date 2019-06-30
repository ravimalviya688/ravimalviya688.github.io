import React from 'react';


class Experience extends React.Component{

  render(){  

    return (
     <div class="content_container">
		<div class="main_content_outer d-flex flex-xl-row flex-column align-items-start justify-content-start">
				
			<div class="experience" style={{marginTop:'20px'}}>
				<div class="general_info_title" style={{textAlign:'center'}}>Experience</div>
				<div class="exp_item d-flex flex-md-row flex-column align-items-start justify-content-start">
					<div><div class="exp_time">Nov 2017-Present</div></div>
					<div><div class="edu_image"><img src="images/hesta.png" alt="" height="100" width="100"/></div></div>
					<div class="exp_content">
						<div class="exp_title_container">
							<div class="exp_title">Javascript Developer</div>
							<div class="exp_subtitle">Hestabit Technology Pvt. Ltd</div>
						</div>
						<div class="exp_text">
							<p>Hestabit Technologies is a "Startup focused" Web and Mobile App solution provider.The company has its head office in Noida Sec-63.</p>
						</div>
					</div>
				</div>
				<hr />
				<div class="exp_item d-flex flex-md-row flex-column align-items-start justify-content-start">
					<div><div class="exp_time">Jan 217-Oct 2017</div></div>
					<div><div class="edu_image"><img src="images/cedcoss.png" alt="" height="100" width="100"/></div></div>
					<div class="exp_content">
						<div class="exp_title_container">
							<div class="exp_title">Software Developer</div>
							<div class="exp_subtitle">Cedcoss Technology Pvt. Ltd</div>
						</div>
						<div class="exp_text">
							<p>CEDCOSS, conceived and conceptualized in 2010 by co-founders Himanshu Rauthan and Abhishek Jaiswal is a leading solutions provider working across verticals to accelerate smooth digital transformation. It is a lucknow based company.</p>
						</div>
					</div>
				</div>

			</div>
		</div>


	</div>
    );
  }
}

export default Experience;

