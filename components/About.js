import React from 'react';


class AboutMe extends React.Component{

  render(){  

    return (
     <div class="content_container">
		<div class="main_content_outer d-flex flex-xl-row flex-column align-items-start justify-content-start">

			<div class="general_info d-flex flex-xl-column flex-md-row flex-column">
				<div>
					<div class="general_info_image">
						<div class="background_image" style={{backgroundImage:`url(images/smith.jpg)`}}></div>
					</div>
						<h1 style={{textAlign:'center',color:'white'}}>Ravi Malviya</h1>
						<h3 style={{textAlign:'center',color:'white'}}>MERN Stack Developer</h3>
						<h4 style={{textAlign:'center',color:'white'}}>2 year of Exp.</h4>
				</div>
				
			</div>


			<div class="main_content">
			
				<div class="general_info_content">
					<div class="general_info_content_inner mCustomScrollbar" data-mcs-theme="minimal-dark">
						<div class="general_info_title">General Information</div>
						<div style={{width:'50%',float:'left'}}>
							<p>
								I am cheerful person with a happy and contended life. I believe in
								simple living and high thinking. I want to help people in any ways
								beacuse its give me inner happiness and peace.

							</p>
							<p>
								I am currently working for Hestabit Tehnology Pvt. Ltd as a Software
								Engineer in noida. I have approx. 2 year of experience in this field.
							</p>
							<div>
								<h4 style={{color:'#a82626'}}>Career Objective</h4>
								<p>
								To succeed in an environment of growth and excellence & seeking for a job in challenging and
								healthy work environment where I can explore new technologies and develop skills efficiently
								for organizational growth
								</p>
							</div>
						</div>
						<div style={{width:'30%',float:'right'}}>
							<ul class="general_info_list">
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="general_info_icon d-flex flex-column align-items-start justify-content-center"><img src="images/icon_1.png" alt=""/></div>
									<div class="general_info_text">Name: Ravi Malviya</div>
								</li>
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="general_info_icon d-flex flex-column align-items-start justify-content-center"></div>
									<div class="general_info_text">Location: Noida, Uttar Pradesh, India</div>
								</li>
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="general_info_icon d-flex flex-column align-items-start justify-content-center"><img src="images/icon_2.png" alt=""/></div>
									<div class="general_info_text">Date of Birth: December 25, 1993</div>
								</li>
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="general_info_icon d-flex flex-column align-items-start justify-content-center"><img src="images/icon_3.png" alt=""/></div>
									<div class="general_info_text">ravimalviya688@gmail.com</div>
								</li>
								<li class="d-flex flex-row align-items-center justify-content-start">
									<div class="general_info_icon d-flex flex-column align-items-start justify-content-center"><img src="images/icon_4.png" alt=""/></div>
									<div class="general_info_text">+91 9161652249</div>
								</li>
							</ul>
							<div class="social_container">
								<ul class="d-flex flex-row align-items-start justify-content-start">
									<li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
									<li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
									<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
									<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


	</div>
    );
  }
}

export default AboutMe;

