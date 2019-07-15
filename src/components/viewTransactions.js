import React,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {toggleSee, toggleSeeMore, toggleCommentBox } from '../redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class viewTransactions extends Component{
    state = {
        pendingKeys:[],
        signedKeys:[],
        sTrans:[]
    }


    componentDidMount(){
        const {drizzle} = this.props
        const Token = drizzle.contracts.Token;

        let pKeys = [];
        let sKeys = [];

        for(let i = 0; i<this.props.signedLength; i++){
            let key =Token.methods["pendingTransactions"].cacheCall(i)
            sKeys.push(key)
            this.setState({signedKeys:[...sKeys]})
        }

        for(let i = 0; i<this.props.pendingLength.value; i++){
            let key =Token.methods["pendingTransactions"].cacheCall(i)
            pKeys.push(key)
            this.setState({pendingKeys:[...pKeys]})
        }

        this.unsubscribe = drizzle.store.subscribe(() => {
			const drizzleState = drizzle.store.getState();
			if (drizzleState.drizzleStatus.initialized) {
				this.setState({ drizzleState });
            }
        });
    }

    componentWillUnmount = () => {
        this.unsubscribe()
    };
    

    render(){
        // if(!this.state.loading)return 'Loading....'
        let pTrans = []
        let sTrans = []
        // console.log('state ooo',drizzle.store.)
        const{ Token } = this.props.drizzleState.contracts;
        console.log('d',Token)
        // for(let i = 0; i<this.props.pendingLength.value; i++){
        //     let pendingTrans = Token.pendingTransactions[this.state.pendingKeys[i]];
        //     pendingTrans && pTrans.push(pendingTrans.value)
            
        // }

        for(let i = 0; i< this.props.signedLength; i++){
            console.log('sss]',i)
            const{ Token } = this.props.drizzleState.contracts;
            let signedTrans = Token.signedTransactions[this.state.signedKeys[i]];
            signedTrans && (sTrans[i]=signedTrans.value);
        }

        for(let i = 0; i< this.props.pendingLength.value; i++){
            const{ Token } = this.props.drizzleState.contracts;
            let pendingTrans = Token.pendingTransactions[this.state.pendingKeys[i]];
            pendingTrans && (pTrans[i]=pendingTrans.value);
        }

        console.log('seeee',sTrans)
        console.log('peeee',pTrans)
        
        let transactions = [...sTrans,...pTrans]
        transactions = transactions.filter(a=>a.id!=0)
        console.log('Transactions',transactions)
        transactions = transactions.sort((a,b)=>a.index-b.index)
        let k = 0
        const data = transactions.map(a=>{
            // console.log(a.from);
            k++
            let cls = 'transaction_pending';
            let cls1 = 'seePend'
            if(a.no_signed==3){
                cls = 'transaction_success' 
                cls1= 'seeSigned';
            } 
            return (
                <div key={k}>
                    <fieldset className={cls} id = {a.id} >
                        <div className="transaction-content">
                            <div className="transaction-header">
                                {/* <span > */}
                                    <span><strong className="from"> From: </strong> <i> {a.executioner}</i></span>
                                    <br/><br />
                                    <span><strong className="to"> To: </strong> <i> {a.to}</i>		</span>						
                                {/* </span> */}
                            </div>  
                            {
                                // this.props.transactionUi.seeMore &&
                                // (<ReactCSSTransitionGroup
                                //     transitionName='example'
                                //     transitionEnterTimeout={500}
                                //     transitionLeaveTimeout={300}
                                // >
                            
                                <div className="transaction-body">
                                    {/* <p className="tx" ><strong>Tx. Hash: </strong><i> {a.txHash}</i></p> */}
                                    <p><strong className='amount'>Amount:</strong>  <i>{a.amount}</i></p>
                                    {/* <p><strong className='gas'>Gas:</strong>  <i>2.35 GWEI</i></p> */}
                                    <p><strong className='purpose'>Purpose:</strong>  <i>{a.purpose}</i></p>

                                    {
                                        !this.props.commentBox && 
                                        (<ReactCSSTransitionGroup
                                            transitionName='example'
                                            transitionEnterTimeout={500}
                                            transitionLeaveTimeout={300}    
                                        >
                                            <span className="comment-section">
                                                <p>
                                                    <textarea className="comment-text center-block"></textarea>
                                                </p>
                                                <p className="actions">
                                                    <button className="btn btn-success btn-xs confirm" onClick = {()=>this.props.toggleCommentBox(this.props.commentBox)}><i className="fa fa-check"></i></button>
                                                    <button className="btn btn-danger btn-xs cls" onClick = {()=>this.props.toggleCommentBox(this.props.commentBox)}><i className="fa fa-times"></i></button>
                                                </p>
                                            </span>
                                        </ReactCSSTransitionGroup>)
                                    }
                                    {/* <p>
                                        <button className="btn btn-info btn-xs comment-btn" onClick = {()=>this.props.toggleCommentBox(this.props.commentBox)}>Comment</button>
                                    </p> */}
                                </div>
                            // </ReactCSSTransitionGroup>)
                            }
                            {/* <div className="transaction-footer">
                                <span className={cls1} onClick = {(e)=>this.props.toggleSee(this.props.transactionUi.see,this.props.transactionUi.seeMore)} ><i className={this.props.transactionUi.see} ></i></span>
                            </div> */}
                        </div>
                    </fieldset>
                </div>
            )
        })
            
        return(
            <div>
                {data}
            </div>
            
        )
    }
}

const mapStateToProps = state=>{
    return{
        transactionUi: state.TransactionUi,
        commentBox: state.CommentBoxUi
    }
}

const mapDispatchToProps = dispatch =>{
    return bindActionCreators({ toggleSee, toggleSeeMore, toggleCommentBox }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(viewTransactions)
