import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import NavLinks from './navLinks';
import MainPage from './mainPg';
import Footer from './footer';
import Web3 from 'web3'
import { blockchainData } from '../redux/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends Component {
	constructor(props){
		super(props)
		this.props.blockchainData(Web3)
	}
	

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

const mapStateToProps = state => {
    return{
      blockchainInfo: state.BlockchInfo
    }
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({blockchainData}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
