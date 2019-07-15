import React from 'react'
import TransactionChart from '../transactionsChart'
import Transactions from '../transactions'
import { Link } from 'react-router-dom'


const home = () => {
  return (
      // <!-- dash container -->
    <div className="container">


      {/* <!-- FIRST ROW OF BLOCKS --> */}
      <div className="row">

        {/* <!--Chart --> */}
        <TransactionChart/>



        <div className="col-sm-3 col-lg-3">
          {/* <!-- Audit Counter --> */}
          <div className="dash-unit">
            <title>UMaT Coin (UMC)</title>
            <hr />
            <div className="cont" style={{textAlign:'left'}}>
              
                <h4><strong>Value: </strong><em>GHS1.00 per UMC</em></h4>
              
                <h4><strong>Market Cap.: </strong><em>GHS25 Billion</em></h4>
              	
            </div>
          </div>

          {/* <!-- Audit Countdown --> */}
          {/* <!-- <div className="dash-unit">
            <title>Audit Reset Countdown</title>
            <hr> -->
          <!-- <div className="container" style="width: 100% !important"> -->
          <!-- <div className="row text-center">
              <div className="clock"></div>
            </div> -->
          <!-- </div> -->
          <!-- </div> --> */}

        </div>
      </div>
      {/* <!-- /row --> */}


      {/* <!-- SECOND ROW OF BLOCKS --> */}
      <div className="row">
        {/* <!-- Transactions tab --> */}
        <Transactions/>
        {/* <!-- Payments tab --> */}
        {/* <!-- <div className="col-sm-4 col-lg-4">
          <a href="pgs/payments.html" target="blank">
            <div className="dash-unit">
              <title>Payments</title>
              <hr>
              <div className="cont">
                <span>
                  <img src="images/payment-method.svg" height="200" alt="payment method icon" />
                </span>
              </div>
            </div>
          </a>
        </div> --> */}
        {/* <!-- Budget tab--> */}
        <div className="col-sm-6 col-lg-6">
          <Link to='/budget'>
            <div className="dash-unit">
              <title>Budget</title>
              <hr/>
              <div className="cont">
                <span>
                  <img src='images/budget.svg' height='200' alt='budget-icon' />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* <!-- THIRD ROW OF BLOCKS --> */}
      <div className="row">
        {/* <!-- Audit tab --> */}
        {/* <!-- <div className="col-sm-4 col-lg-4">
          <a href="pgs/audit.html">
            <div className="dash-unit">
              <title>Audit</title>
              <hr>
              <div className="cont">
                <span>
                  <img src="images/check-list.svg" alt="audit-icon" height="200"/>
                </span>
              </div>
            </div>
          </a>
        </div> --> */}
        {/* <!-- Reports tab --> */}
        <div className="col-sm-6 col-lg-6">
          <Link to="/reports">
            <div className="dash-unit">
              <title>Reports</title>
              <hr/>
              <div className="cont">
                <span>
                  <img src='images/chart.svg' height='200' alt='chart'/>
                </span>
              </div>
            </div>
          </Link>
        </div>
        {/* <!-- User Profile --> */}
        <div className="col-sm-6 col-lg-6">
          <Link to='/profile'>
            <div className="dash-unit">
              <title>User Profile</title>
              <hr/>
              <div className="thumbnail">
                <img src="images/face80x80.jpg" alt="Marcel Newman" className="img-circle"/>
              </div>
              {/* <!-- /thumbnail --> */}
              <h1>Marcel Newman</h1>
              <h3>Madrid, Spain</h3>
              <br />
              <div className="info-user">
                <span aria-hidden="true" className="li_user fs1"></span>
                <span aria-hidden="true" className="li_settings fs1"></span>
                <span aria-hidden="true" className="li_mail fs1"></span>
                <span aria-hidden="true" className="li_key fs1"></span>
              </div>
            </div>
          </Link>
        </div>
      </div>

    </div>
    // <!-- /container -->
  )
}

export default home
