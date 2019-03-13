import React, { Component } from 'react'
import {Col, Grid, Row, Jumbotron, Panel} from 'react-bootstrap'


export default class budget extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
            <Row>
                <Col>
                    <Panel>
                        <Panel.Heading style={{background:'green',color:'white', alignText:'center'}}>
                            <p>Budget for the Semester</p>
                        </Panel.Heading>
                        <Panel.Body>
                            <p>Hello Budget body</p>
                        </Panel.Body>
                        <Panel.Footer>
                            <p>I am FOOTER</p>
                        </Panel.Footer>
                    </Panel>
                </Col>
            </Row>
          
        </Jumbotron>
      </Grid>
    )
  }
}