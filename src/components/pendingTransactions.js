import React from 'react'

const pendingTransactions = () => {
  return (
    <div className=''>
      <fieldset className='details pending-trans'>
            <div className='user-dp'>
                <img className='dp img-circle' src='./images/face.jpg' alt='dp' height='50px' width=''/>
            </div>
            <div className='text-details'>
                <ul className='pending-details'>
                    <li>From:</li>
                    <li>To:</li>
                </ul>
            </div>
        </fieldset>
        <fieldset className='details pending-trans'>
            <div className='user-dp'>
                <img className='dp img-circle' src='./images/face.jpg' alt='dp' height='50px' width=''/>
            </div>
            <div className='text-details'>
                <ul className='pending-details'>
                    <li>From:</li>
                    <li>To:</li>
                </ul>
            </div>
        </fieldset>
        <fieldset className='details pending-trans'>
            <div className='user-dp'>
                <img className='dp img-circle' src='./images/face.jpg' alt='dp' height='50px' width=''/>
            </div>
            <div className='text-details'>
                <ul className='pending-details'>
                    <li>From:</li>
                    <li>To:</li>
                </ul>
            </div>
        </fieldset>
    </div>
  )
}

export default pendingTransactions
