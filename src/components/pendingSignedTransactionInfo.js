import React from 'react'
import {ContractData} from 'drizzle-react-components'
import { map } from 'highcharts';
import {drizzleConnect} from 'drizzle-react'


const pendingSignedTransactionInfo = (props) =>{

    // const PendingData = ()=>{
      // for(let i =0; i<2; i++){
        // return(
          // <ContractData contract="Token" method = "pendingTransactions" methodArgs={[i]}  render={a => (
          //   <a>
          //     <ul className="list-group">
          //       <li className="list-group-item list-group-item-success">
          //           {/* <p><strong className="tx">Tx.hash:</strong> <i>{a.txHash}</i></p> */}
          //           <p><strong className="from">From:</strong> <i>{a.executioner}</i></p>
          //           <p><strong className="to">To:</strong> <i>{a.to}</i></p>
          //           <p><strong>Amount:</strong> <i>{a.amount}UMC</i></p>
          //       </li>
          //     </ul>
          //   </a>
          // )}/>
        // )
      // }
    }

    console.log(props)
  // if(!props.Token.initialized)return 'Looaaadinggg......'
  return(
    <div>
      
      {/* <PendingData/> */}
      
   </div>
  )
}

const view=a=>{

}

const mapStateToProps = state=>{
  console.log('signed: ',state)
  
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



export default pendingSignedTransactionInfo
