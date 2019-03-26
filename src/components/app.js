import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import NavLinks from './navLinks';
import MainPage from './mainPg';
import Footer from './footer';
import { initWeb3, initTruffleContract} from '../redux/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends Component {
	constructor(props){
		super(props)
		this.props.initWeb3()
		this.props.initTruffleContract()
		setTimeout(()=>{
			console.log('Loading..........!!!')
			console.log(this.props.web3)
		},500)
		
		// console.log('Web3: ',this.props.web3)
		
	}

// componentWillUpdate(){
// 			setTimeout(()=>{
				
// 			},200)
	
// }

async truffle(){
	let contract = await this.props.truffleContract
	console.log(contract)
	return contract 
}

async web(){
	let web3 = await this.props.web3
	console.log(web3)
	return web3
}

isEmpty(obj) {
	for(var key in obj) {
			if(obj.hasOwnProperty(key))
					return false;
	}
	return true;
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
	// console.log('state props: ',state.TruffleContract)
    return{
			web3: state.InitWeb3,
			truffleContract: state.TruffleContract,
    }
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({initWeb3, initTruffleContract}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
