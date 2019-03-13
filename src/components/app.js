import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import NavLinks from './navLinks';
import MainPage from './mainPg';
import Footer from './footer';


class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<NavLinks/>
					<MainPage/>
					<Footer/>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
