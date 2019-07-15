import React, {Component} from 'react'
import {ContractData} from 'drizzle-react-components'
import { map } from 'highcharts';
import {drizzleConnect} from 'drizzle-react'
import {loadPerson} from '../redux/actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


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

    loadPerson(e){
      let hash =e.target.id
      this.props.loadPerson(hash);
    }

  render(){
    let pTrans = []
    const{ Token } = this.props.drizzleState.contracts;
    // console.log('d',Token)
    for(let i = 0; i<this.props.length; i++){
      let pendingTrans = Token.pendingTransactions[this.state.pendingKeys[i]];
      pendingTrans && pTrans.push(pendingTrans.value)
      
    }
    
    let a = pTrans.filter(a=>a.id!=0);
    let k = 0
    const pendingData = a.map(a=>{
    // console.log('see',a)
    ++k
      return(
        <ul className="list-group " id={a.txHash} key={k} >
          <li className="list-group-item list-group-item-success">
              {/* <p><strong className="tx">Tx.hash:</strong> <i>{a.txHash}</i></p> */}
              <p><strong className="from">From:</strong> <i>{a.executioner}</i></p>
              <p ><strong className="to">To:</strong> <i>{a.to}</i></p>
              <p><strong>Amount:</strong> <i>{a.amount}UMC</i></p>
              <p><strong>Purpose:</strong> <i>{a.purpose}</i></p>
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
  return {
    loadedPerson:state.LoadPerson
  }
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({loadPerson},dispatch)
}



export default connect(mapStateToProps,mapDispatchToProps)(pendingTransactionInfo);
