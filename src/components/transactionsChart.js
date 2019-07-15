import React from 'react';
import {Col } from 'react-bootstrap'

const TransactionsTab = () => {
    return (
        <Col sm={9} lg={9} >
            <div className="dash-unit">
                <dtitle>Transactions Chart</dtitle>
                <hr />
                <br />
                <br />
                <div className="flexslider">
                    <ul className="slides">
                        <li><img src="images/slide01.png" alt="slider"/></li>
                        <li><img src="images/slide02.png" alt="slider"/></li>
                    </ul>
                </div>
                <div className="cont">
                    <p>StatCounter Information</p>
                </div>
            </div>
        </Col>
    );
}

export default TransactionsTab;
