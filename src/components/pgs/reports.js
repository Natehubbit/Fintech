import React, { Component } from 'react'
import {Col, Grid, Row, Jumbotron, Panel, Thumbnail} from 'react-bootstrap'
import Table from '../reportsTable'
import GraphChart from '../highchart'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class reports extends Component {
  state = {
    totalSupplyKey: null,
    balanceKey: null,

  }

  componentDidMount(){
    const { drizzle } = this.props;
        const Token = drizzle.contracts.Token;
    
        // let nameDataKey = Token.methods["name"].cacheCall()
        // this.setState({nameDataKey});
    
        let totalSupplyKey = Token.methods["totalSupply"].cacheCall()
        this.setState({totalSupplyKey});

        let balanceKey = Token.methods["contractBalance"].cacheCall()
        this.setState({balanceKey});
    
        // console.log('Initial State ', this.props.signBtnState)
        this.unsubscribe = drizzle.store.subscribe(() => {

          // every time the store updates, grab the state from drizzle
          const drizzleState = drizzle.store.getState();
          // check to see if it's ready, if so, update local component state
          if (drizzleState.drizzleStatus.initialized) {
            this.setState({ drizzleState });
          }
			// console.log('Drizzlllleeee',drizzleState)
        });
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render() {

    const {Token} = this.props.drizzleState.contracts;
    const balance = Token.contractBalance[this.state.balanceKey]

    const totalSupply = Token.totalSupply[this.state.totalSupplyKey]

    
    if(!totalSupply)return 'Loading.......!!!!';
    if(!balance)return 'Loading.......!!!!';
    console.log('b',balance,'t',totalSupply)
    return (
      <Grid>
        <Jumbotron>
          <Row>
            <Panel style={{borderColor:'#f46441' }}>
              <Panel.Body >
                <Col md={4} style={{borderRight:'1px solid #41bbf4' }}>
                  <Thumbnail>
                    <h4>{totalSupply.value}<strong>UMC</strong></h4>
                    <span>Total Supply</span>
                  </Thumbnail>
                </Col>
                <Col md={4} style={{borderRight:'1px solid green' }}>
                  <Thumbnail>
                    <h4>{totalSupply.value-balance.value}<strong>UMC</strong></h4>
                    <span>Total Amount Disbursed</span>
                  </Thumbnail>
                </Col>
                <Col md={4}> 
                  <Thumbnail>
                    <h4>{balance.value}<strong>UMC</strong></h4>
                    <span>Net Amount Remaining</span>
                  </Thumbnail>
                </Col>
              </Panel.Body>
            </Panel>
          </Row>
          <Row>
            <Col md = {12}>
              <Panel style={{border:'1px solid green'}}>
                <Panel.Body>
                  Chart for Transactions
                  <GraphChart />
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
          <Row>
            <Col md = {6}>
              <Panel>
                <Panel.Body>
                  Transaction Pie Chart 
                </Panel.Body>
              </Panel>
            </Col>
            <Col md = {6}>
              <Panel>
                <Panel.Body>
                  Transaction statistics 
                  <p>Transaction likes, dislikes</p>
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Panel style={{border:'1px solid orange'}}>
                <Panel.Body>
                  <Table/>  
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </Jumbotron>
      </Grid>
    )
  }
}



const mapStateToProps = state => {
    return{
      web3: state.InitWeb3
    }
}


export default connect(mapStateToProps, null)(reports)