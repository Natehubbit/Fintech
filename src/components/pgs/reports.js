import React, { Component } from 'react'
import {Col, Grid, Row, Jumbotron, Panel, Thumbnail} from 'react-bootstrap'
import Table from '../reportsTable'
import GraphChart from '../highchart'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class reports extends Component {
  render() {
    console.log('Reports Page props: ',this.props.web3)
    return (
      <Grid>
        <Jumbotron>
          <Row>
            <Panel style={{borderColor:'#f46441' }}>
              <Panel.Body >
                <Col md={4} style={{borderRight:'1px solid #41bbf4' }}>
                  <Thumbnail>
                    <h4>50,000UMC</h4>
                    <span>Initial Amount</span>
                  </Thumbnail>
                </Col>
                <Col md={4} style={{borderRight:'1px solid green' }}>
                  <Thumbnail>
                    <h4>20,000UMC</h4>
                    <span>Total Amount Spent</span>
                  </Thumbnail>
                </Col>
                <Col md={4}> 
                  <Thumbnail>
                    <h4>30,000UMC</h4>
                    <span>Net Amount</span>
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