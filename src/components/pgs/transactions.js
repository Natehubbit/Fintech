
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleSee,toggleSeeMore,toggleCommentBox } from '../../redux/actions'

const transactions = (props) => {
    console.log('props for transaction',props);
    return (
        <div className="container">
            <div className="col-lg-12 col-sm-12 col-md-12">
                <div className="jumbotron">
                    <header className="transactions-header">
                        <h4>Transactions</h4>
                    </header>
                    {/* <!-- <hr /> --> */}
                        
                    <fieldset className="transaction" data-id ='1' >
                        <div className="transaction-content">
                            <div className="transaction-header">
                                <span >
                                    <strong className="from"> From: </strong> <i> x0456....22e</i>
                                    <strong className="to"> To: </strong> <i> x07de....adf</i>								
                                </span>
                            </div>  
                            {
                                props.transactionUi.seeMore &&
                                (<ReactCSSTransitionGroup
                                    transitionName='example'
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={300}
                                >
                            
                                <div className="transaction-body">
                                    <p className="tx" ><strong>Tx. Hash: </strong><i> 0xhfosdjfs0r0we9r8098wierjpfsd798ewru</i></p>
                                    <p><strong className='amount'>Amount:</strong>  <i>100UMC</i></p>
                                    <p><strong className='gas'>Gas:</strong>  <i>2.35 GWEI</i></p>
                                    <p><strong className='purpose'>Purpose:</strong>  <i>Donation</i></p>

                                    {
                                        !props.commentBox && 
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
                                                    <button className="btn btn-success btn-xs confirm" onClick = {()=>props.toggleCommentBox(props.commentBox)}><i className="fa fa-check"></i></button>
                                                    <button className="btn btn-danger btn-xs cls" onClick = {()=>props.toggleCommentBox(props.commentBox)}><i className="fa fa-times"></i></button>
                                                </p>
                                            </span>
                                        </ReactCSSTransitionGroup>)
                                    }
                                    <p>
                                        <button className="btn btn-info btn-xs comment-btn" onClick = {()=>props.toggleCommentBox(props.commentBox)}>Comment</button>
                                    </p>
                                </div>
                            </ReactCSSTransitionGroup>)
                            }
                            <div className="transaction-footer">
                                <span className='see' onClick = {()=>props.toggleSee(props.transactionUi.see,props.transactionUi.seeMore)} ><i className={props.transactionUi.see} ></i></span>
                            </div>
                        </div>
                    </fieldset>
                    
                        
                </div>
            </div>
        </div>
    )
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

export default connect(mapStateToProps,mapDispatchToProps)(transactions) 