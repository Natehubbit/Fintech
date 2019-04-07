import React,{Component} from 'react'

import { Col,} from 'react-bootstrap'
import { paneClicked } from '../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { stat } from 'fs';

class transactionDetails extends Component{

  state = {
    pendingKeys:[]
  }

  componentDidMount(){
    console.log('TdetailsProps: ',this.props)
    this.fetchData();
  }

  highlight(){
    return{}
  }


  fetchData(){
    const {drizzle} = this.props
    const Token = drizzle.contracts.Token;
    let keys = [];
    
    for(let i = 0; i<this.props.length; i++){
      let key =Token.methods["pendingTransactions"].cacheCall(i)
      keys.push(key)
      this.setState({pendingKeys:[...keys]})
    }
  }
  
  displayData(){
    const{ Token } = this.props.drizzleState.contracts;
    // console.log('d',this.props.length)
    let trans = []
    for(let i = 0; i<this.props.length; i++){
      let pendingTrans = Token.pendingTransactions[this.state.pendingKeys[i]];
      pendingTrans && trans.push(pendingTrans.value)
      
    }

    console.log('DISPTRANS',trans)
    return trans;
  }

  selectTrans(){
    let trans = this.displayData()
    let b = null
    trans.map(a=>{
      if(a.txHash === this.props.paneId){
        console.log('bbbbb',a)
        b = a
        return a;
      }
    })

    console.log('detect',b)
    return b;
  }

  render(){
    // let trans = this.displayData()
    // console.log('PaneId',this.props.paneId)
    let trans = {}
    // console.log('pppp',typeof('hjbg'))
    if(typeof(this.props.paneId)=== typeof('')){
      trans = this.selectTrans();
      console.log('ttt',trans)
    }
    console.log('TRNAS',trans)
    return (
      <div className='transactionDetails'>
          {console.log('TRANS',trans)}
          <hr />
          <h4 className='wallet-head'>Transaction Details</h4>
          <Col offset-col-md={4}>
              <ul className='center-block'>
                  {/* <li className='tx'><strong >Tx.Hash:</strong> 0xslkdfwodshfslkjf8439u0r93hlksd</li> */}
                  <li><strong className='to'>To:</strong>{trans.to}</li>
                  <li><strong className='amount'>Amount:</strong> {trans.amount}UMC</li>
                  <li><strong className='purpose'>Purpose:</strong> {trans.purpose}</li>
                  {/* <li><strong className='gas'>Gas:</strong> 100 Wei</li> */}
                  <li><strong className='signatures'>Signatures:</strong> Finance Officer, Treasurer, President </li>
              </ul>
          </Col>
          
      </div>
    
    )  }
}

const mapStateToProps = state =>{
  return{
     paneId:state.PaneClicked
  }
}

const mapDispatchToProps= dispatch=>{
  return bindActionCreators({paneClicked},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(transactionDetails)
