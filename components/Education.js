import React from 'react';


class Education extends React.Component{

  render(){  

    return (
     <div class="content_container">
		<div class="main_content_outer d-flex flex-xl-row flex-column align-items-start justify-content-start">

				<div class="education" style={{marginTop:'20px'}}>
					<div class="general_info_title" style={{textAlign:'center'}}>Education</div>
					<div class="edu_item d-flex flex-lg-row flex-column align-items-start justfy-content-start">
						<div><div class="edu_year">2017</div></div>
						<div><div class="edu_image"><img src="images/knit.png" alt="" height="100" width="100"/></div></div>
						<div class="edu_content">
							<div class="edu_title_container">
								<div class="edu_title">K.N.I.T , Sultanpur(An Autonomous govt. engineering institute affiliated to AKTU)</div>
								<div class="edu_subtitle">Master of Computer Application</div>
							</div>
							<div class="edu_text">
								<p>Kamla Nehru Institute of Technology (KNIT Sultanpur) is a state government funded, autonomous engineering institution located in Sultanpur, Uttar Pradesh, India. It is affiliated to Dr. A.P.J. Abdul Kalam Technical University (formerly known as Uttar Pradesh Technical University). It has been ranked amongst the top engineering institutes under UPTU.</p>
							</div>
						</div>
					</div>
					<hr />
					<div class="edu_item d-flex flex-lg-row flex-column align-items-start justfy-content-start">
						<div><div class="edu_year">2014</div></div>
						<div><div class="edu_image"><img src="images/du.png" alt="" height="100" width="100"/></div></div>
						<div class="edu_content">
							<div class="edu_title_container">
								<div class="edu_title">Zakir Husain Delhi College, University of Delhi</div>
								<div class="edu_subtitle">B.sc(H) Electronics</div>
							</div>
							<div class="edu_text">
								<p>Zakir Husain Delhi College, formerly Zakir Husain College, Anglo Arabic College and Delhi College, founded in 1692, is the oldest existing educational institution in Delhi, and is a constituent college of the University of Delhi, offering undergraduate and post graduate courses in Arts, Commerce and Sciences.</p>
							</div>
						</div>
					</div>
					<hr />
					<div class="edu_item d-flex flex-lg-row flex-column align-items-start justfy-content-start">
						<div><div class="edu_year">2010</div></div>
						<div><div class="edu_image"><img src="images/up.jpg" alt="" height="100" width="100"/></div></div>
						<div class="edu_content">
							<div class="edu_title_container">
								<div class="edu_title">Sambhu Dayal Inter College</div>
								<div class="edu_subtitle">12th</div>
							</div>
							<div class="edu_text">
								<p>SHAMBHU DAYAL INTER COLLEGE was established in 1952 and it is gov. funded private college.</p>
							</div>
						</div>
					</div>
					<hr />
					<div class="edu_item d-flex flex-lg-row flex-column align-items-start justfy-content-start">
						<div><div class="edu_year">2008</div></div>
						<div><div class="edu_image"><img src="images/up.jpg" alt="" height="100" width="100"/></div></div>
						<div class="edu_content">
							<div class="edu_title_container">
								<div class="edu_title">Vidya Jyoti Public School</div>
								<div class="edu_subtitle">10th</div>
							</div>
							<div class="edu_text">
							</div>
						</div>
					</div>

				</div>
		</div>


	</div>
    );
  }
}

export default Education;

