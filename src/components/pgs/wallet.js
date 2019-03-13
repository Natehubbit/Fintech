import React, { Component } from 'react'
import { Jumbotron, Grid, Row, Col, Panel } from 'react-bootstrap'
import OrgDetails from '../orgDetails'
import TransactionDetails from '../transactionDetails'
import { bindActionCreators } from 'redux';
import { togglePendingTab, toggleSignedTab,signBtnClicked, } from '../../redux/actions'
import {connect} from 'react-redux';
import SignedTransactions from '../signedTransactions'
import PendingTransactions from '../pendingTransactions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'




class wallet extends Component{
    
    details = (props)=>{
        return(
            <p>{props.data}</p>
        )
    }

    pendingTabStyles(props){
        return {
            background: props.toggleTab.pendingTab && 'grey',
            color: props.toggleTab.pendingTab && 'white',
        }
    }

    signedTabStyles(props){
        return {
            background: props.toggleTab.signedTab && 'grey',
            color: props.toggleTab.signedTab && 'white',
        }
    }

    render(){
        return(
            <Grid>
                <Jumbotron>
                    <strong className='center-block' style={{textAlign:'center', marginBottom: '20px',fontSize: '30px'}}>WALLET</strong>
                    <Row>
                    <Col md={5}>
                        <Panel style={{minHeight: '65vh'}} >
                            <Panel.Heading style={{paddingLeft:'0px',paddingRight:'0px'}}>
                                <div className='wallet-trans-heading' style={{ width:'100%', overflow:'hidden',marginTop:'-10px',marginBottom:'-10px', textAlign: 'center'}} >
                                    <div className='tab pending-tab pull-left' onClick={()=>this.props.togglePendingTab(this.props.toggleTab.pendingTab)} style = {this.pendingTabStyles(this.props)}>
                                        <h4>Pending Transactions</h4>
                                    </div>
                                    <div className='tab signed-tab pull-right' onClick={()=>this.props.toggleSignedTab(this.props.toggleTab.pendingTab)} style = {this.signedTabStyles(this.props)} >
                                        <h4>Signed Transactions</h4>
                                    </div>
                                </div>
                            </Panel.Heading>
                            <Panel.Body style={{marginTop:'-15px'}} >
                                <ReactCSSTransitionGroup
                                    transitionName='example'
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={300}
                                >
                                    {
                                        !this.props.toggleTab.pendingTab? <SignedTransactions/>:<PendingTransactions/>
                                    }
                                </ReactCSSTransitionGroup>
                            </Panel.Body>
                        </Panel>
                    </Col>
                    <Col md={7} >
                        <Panel>
                            <Panel.Body>
                                {
                                    <div>{this.details(this.props)}</div>
                                }
                                <Grid>
                                    <Row>
                                        <OrgDetails/>
                                    </Row>
                                    <Row>
                                        <TransactionDetails/>
                                    </Row>
                                </Grid>
                            </Panel.Body>
                            <Panel.Footer style={{textAlign:'center'}}>
                                <button className='btn btn-success sign' onClick={()=>this.props.loadOrgData()} title='Sign Transaction'><i className='fa fa-sign-in'></i></button>  
                                <button className='btn btn-danger cancel' title='Terminate Transaction' ><i className='fa fa-close'></i></button>
                            </Panel.Footer>
                        </Panel>
                    </Col>
                </Row>
            
            </Jumbotron>
            </Grid>
        )
        
    }
}



const mapStateToprops = state =>{
    return{
        toggleTab:state.ToggleTab,
    }
}

const mapDispatchToprops= dispatch=>{
    return bindActionCreators({toggleSignedTab, togglePendingTab, signBtnClicked,},dispatch)
}

export default connect(mapStateToprops,mapDispatchToprops)(wallet);