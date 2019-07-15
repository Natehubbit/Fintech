import React,{Component} from 'react'

import { Col,} from 'react-bootstrap'
import { paneClicked } from '../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { stat } from 'fs';
import {signaturies} from '../redux/actions'

class transactionDetails extends Component{

  state = {
    pendingKeys:[],
    trans:{
      executioner:null,
      amount: null,
      to:null,
      purpose:null,
      no_signed:null
    },
    drizzleState:this.props.drizzleState,
  }

  componentDidMount(){
    // console.log('TdetailsProps: ',this.props)
    this.fetchData();
  }

  componentWillUnmount(){
    this.unsubscribe()
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
    
    this.unsubscribe = drizzle.store.subscribe(() => {
			const drizzleState = drizzle.store.getState();
			if (drizzleState.drizzleStatus.initialized) {
				this.setState({ drizzleState });
			}
    });
  }
  
  displayData(){
    const{ Token } = this.state.drizzleState.contracts;
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
    console.log('selected ',b)
    return b;
  }

  render(){
    let trans = {}

    let s1 =''
    let s2 = ''
    let s3 = ''

    if(typeof(this.props.paneId)=== typeof('')){
      trans = this.selectTrans();
      // Console.log(trans)
      // if(trans){
        // if(trans.signed1 && trans.signed1 == signaturies.treasurer)s1 = 'Treasurer';
        // if(trans.signed1 && trans.signed2 == signaturies.president)s2 = 'President';
        // if(trans.signed1 && trans.signed3 == signaturies.financeOfficer)s3 = 'Finance Officer';
      // }
      if(!trans)trans=this.state.trans
      // console.log('ttt',trans)

      
    }
      return(
        <div className='transactionDetails'>
            {/* {console.log("skldjf",trans.executioner)} */}
            <hr />
            <h4 className='wallet-head'>Transaction Details</h4>
            <Col offset-col-md={4}>
                <ul className='center-block'>
                    <li className='from'><strong >From:</strong>{trans.executioner} </li>
                    <li><strong className='to'>To:</strong>{this.props.loadPerson.first_name+' '+this.props.loadPerson.last_name}</li>
                    <li><strong className='amount'>Amount:</strong> {trans.amount}UMC</li>
                    <li><strong className='purpose'>Purpose:</strong> {trans.purpose}</li>
                    {/* <li><strong className='gas'>Gas:</strong> 100 Wei</li> */}
                    {/* <li><strong className='signatures'>Signatures:</strong>{trans.no_signed}</li> */}
                </ul>
            </Col>
            
        </div>
      )
    
    // )  
  }
}

const mapStateToProps = state =>{
  return{
      paneId:state.PaneClicked,
      loadPerson:state.LoadPerson,
  }
}

const mapDispatchToProps= dispatch=>{
  return bindActionCreators({paneClicked},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(transactionDetails)
