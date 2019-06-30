import React from 'react';
import { Link } from "react-router-dom";



class ButtonAppBar extends React.Component{

  render(){  
    return (
      <header class="header">
          <div class="header_content d-flex flex-row align-items-center justify-content-start">
            <div class="logo"><img src="./images/smile.png" height="50" width="50"/></div>
            <div class="main_nav d-flex flex-row align-items-end justify-content-start">
              <ul class="d-flex flex-row align-items-center justify-content-start">
                <li class=""><Link to="/">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/projects">Portfolio</Link></li>
              </ul>
              <ul class="d-flex flex-row sociallinks" style={{marginLeft:'50'}}>
                <li class=""><a href="https://github.com/ravimalviya688" target="_blank"><img src="./images/git.png" height="50" width="50"/></a></li>
                <li class=""><a href="https://stackoverflow.com/users/11163702/ravi-malviya" target="_blank"><img src="./images/so.png" target="_blank" height="50" width="50"/></a></li>
                <li class=""><a href="https://www.facebook.com/ravimalviya688" target="_blank"><img src="./images/fb.jpeg" height="50" width="50"/></a></li>
                <li class=""><a  href="https://www.linkedin.com/in/ravi-malviya" target="_blank" ><img src="./images/linkedin.png" height="50" width="50"/></a></li>
              </ul>
            </div>
            <div class="menu">
              <div class="menu_content d-flex flex-row align-items-start justify-content-end">
                <div class="hamburger ml-auto">menu</div>
                <div class="menu_nav text-right">
                  <ul>
                   <li class=""><Link to="/">About</Link></li>
                  <li><Link to="/skills">Skills</Link></li>
                  <li><Link to="/education">Education</Link></li>
                  <li><Link to="/experience">Experience</Link></li>
                  <li><Link to="/projects">Portfolio</Link></li>
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