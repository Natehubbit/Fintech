import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import NavLinks from './navLinks';
import MainPage from './mainPg';
import Footer from './footer';
import { initWeb3, initTruffleContract, viewPendingTransactions, } from '../redux/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { signaturies } from '../redux/actions'
import {Web3} from '../redux/actions'
import drizzleOptions from '../ledger/drizzle/options'
import {drizzleConnect} from 'drizzle-react'
import { LoadingContainer,ContractData } from 'drizzle-react-components'
import SrcPayment from './pgs/srcPayment'



class App extends Component {
	state = { loading:true, drizzleState:null }

	componentDidMount(){
		
		const {drizzle} = this.props
		// subscribe to changes in the store
		this.unsubscribe = drizzle.store.subscribe(() => {

			// every time the store updates, grab the state from drizzle
			const drizzleState = drizzle.store.getState();
			// console.log('app cdm drizzleState: ',drizzleState)
			// check to see if it's ready, if so, update local component state
			if (drizzleState.drizzleStatus.initialized) {
				this.setState({ loading: false, drizzleState });
			}
			
		});

		
	}

	componentWillUnmount(){
		this.unsubscribe()
	}


	render() {
		// console.log('drizzleState APP: ',this.state.loading)
		if((this.state.loading)) return 'loading';
		// console.log(this.props)
		return (
			<BrowserRouter>
				<div>
					<NavLinks/>
					<MainPage drizzle={this.props.drizzle} drizzleState={this.state.drizzleState}/>
					<Footer/>
				</div>
			</BrowserRouter>
		);
	}

}

// const mapStateToProps=state=>{
// 	console.log('CHeck lot: ',state)
// 	return{
// 		state
// 	}
// }



export default App;
