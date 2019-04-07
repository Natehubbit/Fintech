import React, {Component} from 'react'
import {ContractData} from 'drizzle-react-components'
import { map } from 'highcharts';
import {drizzleConnect} from 'drizzle-react'


class pendingTransactionInfo extends Component{
    state = {
      pendingKeys:[]
    }

    componentDidMount() {
      console.log('pending',this.props)
      const {drizzle} = this.props
      const Token = drizzle.contracts.Token;
      let keys = [];
      
      for(let i = 0; i<this.props.length; i++){
        let key =Token.methods["pendingTransactions"].cacheCall(i)
        keys.push(key)
        this.setState({pendingKeys:[...keys]})
      }
    }

  render(){
    let pTrans = []
    const{ Token } = this.props.drizzleState.contracts;
    // console.log('d',Token)
    for(let i = 0; i<this.props.length; i++){
      let pendingTrans = Token.pendingTransactions[this.state.pendingKeys[i]];
      pendingTrans && pTrans.push(pendingTrans.value)
      
    }
    

    let k = 0
    const pendingData = pTrans.map(a=>{
    console.log('see',a)
    ++k
      return(
        <ul className="list-group " value={a.txHash} key={k} onClick={e=>this.props.paneClicked(e,this.refs)}>
          <li ref={a.txHash} className="list-group-item list-group-item-success">
              {/* <p><strong className="tx">Tx.hash:</strong> <i>{a.txHash}</i></p> */}
              <p ref={a.txHash}><strong className="from">From:</strong> <i>{a.executioner}</i></p>
              <p ref={a.txHash}><strong className="to">To:</strong> <i>{a.to}</i></p>
              <p ref={a.txHash}><strong>Amount:</strong> <i>{a.amount}UMC</i></p>
          </li>
        </ul>
      )
    })

    return(
      <div>
        
        {pendingData}
        
      </div>
    )

  }
    
}

const mapStateToProps = state=>{
  // console.log('signed: ',state)
  
  return {
    ...state.contracts
    // viewOrgDetails: state.SrcUi,
    // web3: state.InitWeb3,
    // truffleContract:state.TruffleContract,
    // receipt:state.CreateTransaction,
    // signedTransactions: state.ViewSignedTransactions,
    // pendingTransactions: state.ViewPendingTransactions,
  }
}

// const mapDispatchToProps = dispatch =>{
//   return bindActionCreators({viewOrganizationDetailsSrc,createTransaction,viewSignedTransactions, viewPendingTransactions},dispatch)
// }



export default pendingTransactionInfo
