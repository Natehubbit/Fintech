import React,{Component} from 'react'
import { signaturies } from '../redux/actions/'
import { paneClicked, changeSignBtnState } from '../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class pendingTransactions extends Component{
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

    signTransaction(e,a,b){
        console.log('Signing Transaction........')
        this.props.changeSignBtnState(e,a,b)
        setTimeout(()=>{
            console.log('pane state: ',this.props.signBtnState)
        })
    }

    trimAddress(address){
        return address.replace(address.substring(4,38), "...")
    }

    displayData(trans){
    
        const{ Token } = this.props.drizzleState.contracts;
        // console.log('d',Token)
        for(let i = 0; i<this.props.length; i++){
          let pendingTrans = Token.pendingTransactions[this.state.pendingKeys[i]];
          if(pendingTrans.txHash===this.props.hashId){
            trans.to = pendingTrans.to;
            trans.amount = pendingTrans.amount;
            trans.purpose = pendingTrans.purpose;
            // trans.to = pendingTrans.to;
            console.log('working')
    
          }
          
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

        let a = pTrans.filter(a=>a.id!=0);
        let pendingData = null
        let key = 0;
        // if(a){
            console.log('A',a)
            pendingData = a.map(a=>{
                ++key
                let from = null;
                if(a.executioner == signaturies.treasurer)from = 'Treasurer';
                if(a.executioner == signaturies.president)from = 'President';
                if(a.executioner == signaturies.financeOfficer)from = 'Finance Officer';
                let address = a.to
                // console.log('adresss: ', a.to)
                address = this.trimAddress(address)
                return(
                    <fieldset dataindex={a.id-1} executioner={a.executioner} id={a.txHash} key = {key} className='details pending-trans' onClick={e=>{this.props.paneClicked(e);this.signTransaction(a.executioner,a.id-1)}}>
                        <div dataindex={a.id-1} executioner={a.executioner} id={a.txHash} className='user-dp'>
                            <img index={a.id-1} executioner={a.executioner} id={a.txHash} className='dp img-circle' src='./images/face.jpg' alt='dp' height='50px' width=''/>
                        </div>
                        <div dataindex={a.id-1} executioner={a.executioner} id={a.txHash} className='text-details'>
                            <ul dataindex={a.id-1} executioner={a.executioner} id={a.txHash} className='pending-details'>
                                <li dataindex={a.id-1} executioner={a.executioner} id={a.txHash} >From:<span id={a.txHash}>{from}</span></li>
                                <li dataindex={a.id-1} executioner={a.executioner} id={a.txHash}>To:<span id={a.txHash}>{address}</span></li>
                                <li dataindex={a.id-1} executioner={a.executioner} id={a.txHash}>Amount:<span id={a.txHash}>{a.amount}</span></li>
                            </ul>
                        </div>
                    </fieldset>
                )
            })
    
        // }
        // else{
        //     console.log('PTRANS')
        //     pendingData = pTrans.map(a=>{
        //         ++key
        //         let from = null;
        //         if(a.executioner == signaturies.treasurer)from = 'Treasurer';
        //         if(a.executioner == signaturies.president)from = 'President';
        //         if(a.executioner == signaturies.financeOfficer)from = 'Finance Officer';
        //         let address = a.to
        //         address = this.trimAddress(address)
        //         return(
        //             <fieldset dataindex={a.id-1} executioner={a.executioner} id={a.txHash} key = {key} className='details pending-trans' onClick={e=>{this.props.paneClicked(e);this.signTransaction(a.executioner,a.id-1)}}>
        //                 <div dataindex={a.id-1} executioner={a.executioner} id={a.txHash} className='user-dp'>
        //                     <img index={a.id-1} executioner={a.executioner} id={a.txHash} className='dp img-circle' src='./images/face.jpg' alt='dp' height='50px' width=''/>
        //                 </div>
        //                 <div dataindex={a.id-1} executioner={a.executioner} id={a.txHash} className='text-details'>
        //                     <ul dataindex={a.id-1} executioner={a.executioner} id={a.txHash} className='pending-details'>
        //                         <li dataindex={a.id-1} executioner={a.executioner} id={a.txHash} >From:<span id={a.txHash}>{from}</span></li>
        //                         <li dataindex={a.id-1} executioner={a.executioner} id={a.txHash}>To:<span id={a.txHash}>{address}</span></li>
        //                         <li dataindex={a.id-1} executioner={a.executioner} id={a.txHash}>Amount:<span id={a.txHash}>{a.amount}</span></li>
        //                     </ul>
        //                 </div>
        //             </fieldset>
        //         )
        //     })
    
        // }
        
        return (
            <div className=''>
                {pendingData}
            </div>
        )
    }
        
}

const mapStateToProps = state =>{
    return{
        signBtnState:state.SignBtnState,
    }
  }
  
  const mapDispatchToProps= dispatch=>{
    return bindActionCreators({paneClicked,changeSignBtnState},dispatch)
  }

export default connect(mapStateToProps,mapDispatchToProps)(pendingTransactions)
