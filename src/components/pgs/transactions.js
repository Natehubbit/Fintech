
import React,{Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ViewTransactions from '../viewTransactions'

class transactions extends Component{

    state = {
        pendingLengthKey:null,
        pendingLength:null,
        saveReceiptKey:null,
        signTransactionKey:null,
        Loading:true,
        drizzleState:null,
        signedLengthKey:null,
    }

    componentDidMount(){

        const { drizzle } = this.props;
        const Token = drizzle.contracts.Token;

        let pendingLengthKey = Token.methods["pendingTransactionsLength"].cacheCall()
        this.setState({pendingLengthKey});

        let signedLengthKey = Token.methods["signedTransactionsLength"].cacheCall()
        this.setState({signedLengthKey});


        this.unsubscribe = drizzle.store.subscribe(() => {
			// every time the store updates, grab the state from drizzle
			const drizzleState = drizzle.store.getState();
			// check to see if it's ready, if so, update local component state
			if (drizzleState.drizzleStatus.initialized) {
				this.setState({ drizzleState });
            }
            // console.log('ddzz',this.state.drizzleState)
        })
    }
    

    componentWillUnmount(){
        this.unsubscribe()
    }

    render(){

        const{ Token } = this.props.drizzleState.contracts;
        const pendingLength = Token.pendingTransactionsLength[this.state.pendingLengthKey];
        const signedLength = Token.pendingTransactionsLength[this.state.signedLengthKey];
            

        if(!signedLength && !pendingLength)return 'Loading......';
        return (
            <div className="container">
                <div className="col-lg-12 col-sm-12 col-md-12">
                    <div className="jumbotron">
                        <header className="transactions-header">
                            <h4>Transactions</h4>
                        </header>
                        <ViewTransactions drizzle={this.props.drizzle} drizzleState={this.props.drizzleState} pendingLength ={pendingLength} signedLength = {this.state.signedLength}/>
                    </div>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = state=>{
    return{
        
    }
}

const mapDispatchToProps = dispatch =>{
    return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps,null)(transactions) 