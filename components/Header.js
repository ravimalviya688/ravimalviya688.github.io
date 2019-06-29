import React from 'react';


class ButtonAppBar extends React.Component{

  render(){  

    return (
      <header class="header">
          <div class="header_content d-flex flex-row align-items-center justify-content-start">
            <div class="logo"></div>
            <div class="main_nav d-flex flex-row align-items-end justify-content-start">
              <ul class="d-flex flex-row align-items-center justify-content-start">
                <li class="active"><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Education</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div class="menu">
              <div class="menu_content d-flex flex-row align-items-start justify-content-end">
                <div class="hamburger ml-auto">menu</div>
                <div class="menu_nav text-right">
                  <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Experience</a></li>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
    );
  }
}

export default ButtonAppBar;