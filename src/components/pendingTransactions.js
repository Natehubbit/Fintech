import React,{Component} from 'react'
import { signaturies } from '../redux/actions/'
import { paneClicked, changeSignBtnState, loadPerson } from '../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import SignedTransactions from './signedTransactions'

class pendingTransactions extends Component{
    state = {
        pendingKeys:[],
        signedKeys:[],
        signedLengthKey:null
    }

    componentDidMount() {
        console.log('pending',this.props)
        const {drizzle} = this.props
        const Token = drizzle.contracts.Token;
        let pKeys = [];
        // let sKeys = [];
        for(let i = 0; i<this.props.length; i++){
            let key =Token.methods["pendingTransactions"].cacheCall(i)
            pKeys.push(key)
            this.setState({pendingKeys:[...pKeys]})
        }

        let signedLengthKey =Token.methods["signedTransactionsLength"].cacheCall()
        this.setState({signedLengthKey})

        this.unsubscribe = drizzle.store.subscribe(() => {
			const drizzleState = drizzle.store.getState();
			if (drizzleState.drizzleStatus.initialized) {
				this.setState({ drizzleState });
            }
            console.log('Drizzle State Pending:',this.state.drizzleState)
        });
    }


    componentWillUnmount = () => {
        this.unsubscribe()
    };
    


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

    signTransaction(e,a,b){
        console.log('Signing Transaction........')
        this.props.changeSignBtnState(e,a,b)
        setTimeout(()=>{
            console.log('pane state: ',this.props.signBtnState)
        })
    }

    render(){

        let pTrans = []
        const{ Token } = this.props.drizzleState.contracts;
        let signedLength = Token.signedTransactionsLength[this.state.signedLengthKey];

        for(let i = 0; i<this.props.length; i++){
            let pendingTrans = Token.pendingTransactions[this.state.pendingKeys[i]];
            pendingTrans && pTrans.push(pendingTrans.value)
        }
        
        let key = 0;
        pTrans = pTrans.filter(a=>a.id!=0)
        const pendingData = pTrans.map(a=>{
            ++key
            let from = null;
            if(a.executioner == signaturies.treasurer)from = 'Treasurer';
            if(a.executioner == signaturies.president)from = 'President';
            if(a.executioner == signaturies.financeOfficer)from = 'Finance Officer';
            let address = a.to
            address = this.trimAddress(address)
            return(
                <fieldset id={a.txHash} key = {key} className='details pending-trans' onClick={e=>{this.props.paneClicked(e);this.signTransaction(a.executioner,a.id-1);this.props.loadPerson(a.to)}}>
                    <div id={a.txHash} className='user-dp'>
                        <img id={a.txHash} className='dp img-circle' src='./images/face.jpg' alt='dp' height='50px' width=''/>
                    </div>
                    <div id={a.txHash} className='text-details'>
                        <ul id={a.txHash} className='pending-details'>
                            <li id={a.txHash} >From:<span id={a.txHash}>{from}</span></li>
                            <li id={a.txHash}>To:<span id={a.txHash}>{address}</span></li>
                            <li id={a.txHash}>Amount:<span id={a.txHash}>{a.amount}</span></li>
                            <li id={a.txHash}>Purpose:<span id={a.purpose}>{a.purpose}</span></li>
                        </ul>
                    </div>
                </fieldset>
            )
        })

        return (
            <div className=''>
                {
                    this.props.tabState? pendingData:<SignedTransactions  length={signedLength} Token = {Token} keys = {this.state.signedKeys} drizzleState = {this.state.drizzleState} drizzle = {this.props.drizzle}/>
                }
            </div>
        )
    }
    // <SignedTransactions length = {this.props.sLength} keys = {this.state.signedKeys} Token = {this.props.drizzle.contracts.Token} />
}

const mapStateToProps = state =>{
    return{
        signBtnState:state.SignBtnState,
    }
}

const mapDispatchToProps= dispatch=>{
    return bindActionCreators({paneClicked,loadPerson,changeSignBtnState},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(pendingTransactions)