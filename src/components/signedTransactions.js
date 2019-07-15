import React,{Component} from 'react'
import { signaturies } from '../redux/actions/'
import { paneClicked } from '../redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class signedTransactions extends Component{
    state = {
        signedKeys:[],
        loading:true,
        drizzleState:this.props.drizzleState,
        lengthKey:this.props.signedLengthKey,
        length:null,
    }

    componentDidMount() {
        console.log('pending',this.props.length)
        const {drizzle} = this.props
        const Token = drizzle.contracts.Token;
        let keys = [];
        // let length = Token.signedTransactionsLength[this.props.signedLengthKey];
        // this.setState({length:length.value})

        let length = this.state.drizzleState.contracts.Token.signedTransactionsLength[this.props.lengthKey];
        console.log('Length ooooo',length)
        for(let i = 0; i<this.props.length.value; i++){
            let key =Token.methods["signedTransactions"].cacheCall(i)
            keys.push(key)
            this.setState({signedKeys:[...keys]})
        }
        this.unsubscribe = drizzle.store.subscribe(() => {
			const drizzleState = drizzle.store.getState();
			if (drizzleState.drizzleStatus.initialized) {
				this.setState({ loading: false, drizzleState });
			}
        });

        
        
    }

    
    componentWillUnmount() {
        this.unsubscribe()
    }
    

    trimAddress(address){
        return address.replace(address.substring(4,38), "...")
    }


    render(){

        console.log('MYHEAD',this.state.signedKeys)

        let sTrans = []
        let l = null
        const{ Token } = this.state.drizzleState.contracts;
            for(let i = 0; i<this.props.length.value; i++){
                let signedTrans = Token.signedTransactions[this.state.signedKeys[i]];
                signedTrans && sTrans.push(signedTrans.value);
            }

        console.log('strans',sTrans)
        let key = 0;
        const signedData = sTrans.map(a=>{
            console.log('signed',a)
            ++key
            let from = null;
            if(a.executioner == signaturies.treasurer)from = 'Treasurer';
            if(a.executioner == signaturies.president)from = 'President';
            if(a.executioner == signaturies.financeOfficer)from = 'Finance Officer';
            let address = a.to

            address = this.trimAddress(address)
            return(
                <fieldset id={a.txHash} key = {key} className='details signed-trans' onClick={e=>this.props.paneClicked(e)}>
                    <div id={a.txHash} className='user-dp'>
                        <img id={a.txHash} className='dp img-circle' src='./images/face.jpg' alt='dp' height='50px' width=''/>
                    </div>
                    <div id={a.txHash} className='text-details'>
                        <ul id={a.txHash} className='signed-details'>
                            <li id={a.txHash} >From:<span id={a.txHash}>{from}</span></li>
                            <li id={a.txHash}>To:<span id={a.txHash}>{address}</span></li>
                            <li id={a.txHash}>Amount:<span id={a.txHash}>{a.amount}</span></li>
                            <li id={a.txHash}>Purpose:<span id={a.txHash}>{a.purpose}</span></li>

                        </ul>
                    </div>
                </fieldset>
            )
        })

        // if(this.state.loading)return 'Loading';
        return (
            <div className=''>
                {signedData}
            </div>
        )
    }
        
}

const mapStateToProps = state =>{
    return{

    }
}

const mapDispatchToProps= dispatch=>{
    return bindActionCreators({paneClicked},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(signedTransactions)