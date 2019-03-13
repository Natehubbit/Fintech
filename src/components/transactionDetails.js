import React from 'react'

import { Col,} from 'react-bootstrap'

const transactionDetails = () => {
  return (
    <div className='transactionDetails'>
        <hr />
        <h4 className='wallet-head'>Transaction Details</h4>
        <Col offset-col-md={4}>
            <ul className='center-block'>
                <li className='tx'><strong >Tx.Hash:</strong> 0xslkdfwodshfslkjf8439u0r93hlksd</li>
                <li><strong className='to'>To:</strong> Leonard</li>
                <li><strong className='amount'>Amount:</strong> 50,000 UMC</li>
                <li><strong className='purpose'>Purpose:</strong> SRC Hall Week</li>
                <li><strong className='gas'>Gas:</strong> 100 Wei</li>
                <li><strong className='signatures'>Signatures:</strong> Finance Officer, Treasurer, President </li>
            </ul>
        </Col>
        
    </div>
   
  )
}

export default transactionDetails
