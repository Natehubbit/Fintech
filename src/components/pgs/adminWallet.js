import React from 'react'
import { Jumbotron, Grid, Row, Col, Panel } from 'react-bootstrap'
import OrgDetails from '../orgDetails'
import TransactionDetails from '../transactionDetails'
import { bindActionCreators } from 'redux';
import { togglePendingTab, toggleSignedTab } from '../../redux/actions'
import {connect} from 'react-redux';
import SignedTransactions from '../signedTransactions'
import PendingTransactions from '../pendingTransactions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


const wallet = (props) =>{
    console.log('wallet props',props)
    let pendingTabStyle={
        background: props.toggleTab.pendingTab && 'grey',
        color: props.toggleTab.pendingTab && 'white',
    }
    let signedTabStyle={
        background: props.toggleTab.signedTab && 'grey',
        color: props.toggleTab.signedTab && 'white',
    }
    return(
        <Grid>
            
            <Jumbotron>
                <strong className='center-block' style={{textAlign:'center', marginBottom: '20px',fontSize: '30px'}}>WALLET</strong>
                <Row>
                    <Col md={5}>
                        <Panel style={{minHeight: '65vh'}} >
                            <Panel.Heading style={{paddingLeft:'0px',paddingRight:'0px'}}>
                                <div className='wallet-trans-heading' style={{ width:'100%', overflow:'hidden',marginTop:'-10px',marginBottom:'-10px', textAlign: 'center'}} >
                                    <div className='tab pending-tab pull-left' onClick={()=>props.togglePendingTab(props.toggleTab.pendingTab)} style = {pendingTabStyle}>
                                        <h4>Pending Transactions</h4>
                                    </div>
                                    <div className='tab signed-tab pull-right' onClick={()=>props.toggleSignedTab(props.toggleTab.pendingTab)} style = {signedTabStyle} >
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
                                        !props.toggleTab.pendingTab? <SignedTransactions/>:<PendingTransactions/>
                                    }
                                </ReactCSSTransitionGroup>
                            </Panel.Body>
                        </Panel>
                    </Col>
                    <Col md={7} >
                        <Panel>
                            <Panel.Body>
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
                                <button className='btn btn-success' title='Sign Transaction'><i className='fa fa-sign-in'></i></button>  
                                <button className='btn btn-danger' title='Terminate Transaction' ><i className='fa fa-close'></i></button>
                            </Panel.Footer>
                        </Panel>
                    </Col>
                </Row>
            
            </Jumbotron>
      </Grid>
    )
}

const mapStateToProps = state =>{
    return{
        toggleTab:state.ToggleTab
    }
}

const mapDispatchToProps= dispatch=>{
    return bindActionCreators({toggleSignedTab, togglePendingTab},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(wallet);