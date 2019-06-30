import React, {Component} from 'react';
import { BrowserRouter, Route, Link , Switch} from "react-router-dom";

import Header from './components/Header';
import AboutMe from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name : 'ravi'
		}
	}
	render(){
		return(
			<div>

			<div class="super_container">
				

				<BrowserRouter>
					<Header />
					<Switch>
						<Route path="/" exact component={AboutMe} />
						<Route path="/skills" exact component={Skills} />
						<Route path="/education" exact component={Education} />
						<Route path="/projects" exact component={Projects} />
						<Route path="/experience" exact component={Experience} />
					</Switch>
				</BrowserRouter>

			</div>
			</div>
			);
	}
}
export default App;
