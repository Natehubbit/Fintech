import React,{Component} from 'react'
import { bindActionCreators } from 'redux';
import { viewOrganizationDetailsSrc, viewSignedTransactions, viewPendingTransactions, createTransaction, } from '../../redux/actions'
import { connect } from 'react-redux'
import SrcPaymentForm from '../srcPaymentForm'
// import PendingSignedTransactions from '../pendingSignedTransactionInfo'
import { ContractData, AccountData, LoadingContainer } from 'drizzle-react-components'
import {drizzleConnect} from 'drizzle-react'



class srcPayment extends Component{

  componentDidMount() {
    console.log('cdm props',this.props)
    const { drizzle, drizzleState } = this.props;
    
    console.log(drizzle);
    console.log(drizzleState);
  }


  hello = null
  view = a =>{
    console.log('value',a)
  }
  render(){
    // let d = this.props.state.contracts.Token.name;

    
    return (
      <div className="container">
        <div className="col-lg-6 col-sm-6 col-md-6">
          <div className="panel panel-success">
            <div className="panel-heading">
              Transaction History
            </div>
                {/* <!-- <hr /> --> */}
                    
            <div className="panel-body pending-transactions" >
              {
                // <LoadingContainer>
                //   <PendingSignedTransactions/>
                // </LoadingContainer>
              
              
              }
            </div>
            

            <div className="panel-footer">
              <button className="btn btn-success center-block">Transactions</button>
            </div>
          
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
    // if(this.props.drizzleStatus.intialized)
    console.log(this.props)
    
    if(values.walletAddress && !isNaN(values.amount) && values.purpose){
      // this.props.createTransaction(values.purpose,values.amount,values.walletAddress);
      // <ContractData contract="Token" method="createTransaction" methodArgs = {[values.purpose,values.amount,values.walletAddress]}/>
      
    }
  }



}


const mapStateToProps = state=>{
  // console.log('signed: ',state)
  
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
  return bindActionCreators({viewOrganizationDetailsSrc,createTransaction,viewSignedTransactions, viewPendingTransactions},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(srcPayment)
