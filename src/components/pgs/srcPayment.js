import React,{Component} from 'react'
import { bindActionCreators } from 'redux';
import { viewOrganizationDetailsSrc, viewSignedTransactions, saveTransactionDB, viewPendingTransactions, createTransaction, drizzleInit, pen } from '../../redux/actions'
import { connect } from 'react-redux'
import SrcPaymentForm from '../srcPaymentForm'
import PendingTransactions from '../pendingTransactionInfo'
import { ContractData, AccountData, LoadingContainer } from 'drizzle-react-components'
import {drizzleConnect} from 'drizzle-react'



class srcPayment extends Component{
  state = {
    // namedataKey:null,
    createTransKey:null,
    pendingLengthKey:null,
    pendingLength:null,
    saveReceiptKey:null,
    newTransactions:[],
    drizzleState:this.props.drizzleState,
    txHash:null,
  }
  componentDidMount() {
    
    console.log('src cdm props',this.props.drizzle)
    const { drizzle } = this.props;
    const Token = drizzle.contracts.Token;
    this.unsubscribe = drizzle.store.subscribe(() => {

			// every time the store updates, grab the state from drizzle
			const drizzleState = drizzle.store.getState();
			// check to see if it's ready, if so, update local component state
			if (drizzleState.drizzleStatus.initialized) {
				this.setState({ loading: false, drizzleState });
			}
			// console.log('Drizzlllleeee SRC: ',drizzleState)
    });

    let pendingLengthKey = Token.methods["pendingTransactionsLength"].cacheCall()
    this.setState({pendingLengthKey});
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  render(){
    const{ Token } = this.props.drizzleState.contracts;
    const pendingLength = Token.pendingTransactionsLength[this.state.pendingLengthKey];
    
    if(!pendingLength)return 'Loading......';
    return (
      <div className="container">
        <div className="col-lg-6 col-sm-6 col-md-6">
          <div className="panel panel-success">
            <div className="panel-heading">
              Transaction History
            </div>
                {/* <!-- <hr /> --> */}
                    
            <div className="panel-body pending-transactions" >
                <PendingTransactions lengthKey={this.state.pendingLengthKey}  newTrans = {this.state.newTransactions} length = {pendingLength.value} drizzle = {this.props.drizzle} drizzleState= {this.props.drizzleState}/>
            </div>
            

            {/* <div className="panel-footer">
              <button className="btn btn-success center-block">Transactions</button>
            </div> */}
          
          </div>
        </div>
        <div className="col-lg-6 col-sm-6 col-md-6">
          <div className="panel panel-default adminPayment">
            <SrcPaymentForm onSubmit={this.onSubmit} viewOrgDetails = {this.props.viewOrgDetails} />
          </div>
          {/* <button className="btn btn-info btn-lg center-block org" onClick={()=>this.props.viewOrganizationDetailsSrc(this.props.viewOrgDetails)} style={{width:'100%'}}>{!this.props.viewOrgDetails? 'Pay to individual':'Pay to Organisation'}</button> */}
        </div>
      </div>
    )
  }

  
  onSubmit = values=>{
    // console.log('trnas',this.props)
    // console.log('values',values
    if(values.walletAddress && values.amount && values.purpose){
      const { drizzle } = this.props;
      const Token = drizzle.contracts.Token;
      // let txHash = null;
    
      let s = drizzle.store.getState()
      const createTransKey = Token.methods["createTransaction"].cacheSend(values.purpose,values.amount,values.walletAddress,{gas:5000000})
      this.setState({createTransKey})
      s=drizzle.store.getState();
      // console.log('Transaction key ',this.state.createTransKey)
      const txHash = s.transactionStack[createTransKey]
      this.setState({txHash});
      console.log('sssssss',s)
      const saveReceiptKey = Token.methods["saveReceipt"].cacheSend(txHash,{gas:5000000})
      this.setState({saveReceiptKey});
      // const txState = drizzle.store.getState();
      this.props.saveTransactionDB(values.walletAddress,txHash)

      console.log('Transaction Created')
    }

  }



}


const mapStateToProps = state=>{
  console.log('signed: ',state)
  
  return {
    // state
    viewOrgDetails: state.SrcUi,
    web3: state.InitWeb3,
    truffleContract:state.TruffleContract,
    receipt:state.CreateTransaction,
    signedTransactions: state.ViewSignedTransactions,
    pendingTransactions: state.ViewPendingTransactions,
  }
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({viewOrganizationDetailsSrc,createTransaction, saveTransactionDB,viewSignedTransactions, viewPendingTransactions, drizzleInit},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(srcPayment)
