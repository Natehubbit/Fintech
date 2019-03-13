import React from 'react'

const signedTransactions = () => {
  return (
    <div className='signed-transactions'>
      <fieldset className='details signed-trans'>
            <div className='user-dp'>
                <img className='dp img-circle' src='./images/face.jpg' alt='dp' height='50px' width=''/>
            </div>
            <div className='text-details'>
                <ul className='signed-details'>
                    <li>From:</li>
                    <li>To:</li>
                </ul>
            </div>
        </fieldset>
        <fieldset className='details signed-trans'>
            <div className='user-dp'>
                <img className='dp img-circle' src='./images/face.jpg' alt='dp' height='50px' width=''/>
            </div>
            <div className='text-details'>
                <ul className='signed-details'>
                    <li>From:</li>
                    <li>To:</li>
                </ul>
            </div>
        </fieldset>
        <fieldset className='details signed-trans'>
            <div className='user-dp'>
                <img className='dp img-circle' src='./images/face.jpg' alt='dp' height='50px' width=''/>
            </div>
            <div className='text-details'>
                <ul className='signed-details'>
                    <li>From:</li>
                    <li>To:</li>
                </ul>
            </div>
        </fieldset>
    </div>
  )
}

export default signedTransactions
