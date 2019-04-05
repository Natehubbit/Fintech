import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './pgs/home';
import Reports from './pgs/reports';
import AdminLogin from './pgs/adminLogin';
import SrcLogin from './pgs/srcLogin';
import AdminPayment from './pgs/adminPayment';
import SrcPayment from './pgs/srcPayment';
import Transactions from './pgs/transactions';
import Budget from './pgs/budget';
import Wallet from './pgs/wallet';
import Profile from './pgs/profile';

const mainPg = (props) => {
  return (
    <Switch>
        <Route exact path="/" render={() => <Home {...props} />}/>
        <Route path="/adminLogin" render={() => <AdminLogin {...props} />}/>
        <Route path="/adminPayment" render={() => <AdminPayment {...props} />}/>
        <Route path="/srcLogin" render={() => <SrcLogin {...props} />}/>
        <Route path="/reports" render={() => <Reports {...props} />}/>
        <Route path="/srcPayment" render={() => <SrcPayment {...props} />}/>
        <Route path='/transactions' render={() => <Transactions {...props} />}/>
        <Route path='/budget'render={() => <Budget {...props} />}/>
        <Route path='/wallet' render={() => <Wallet {...props} />}/>
        <Route path='/profile' render={() => <Profile {...props} />}/>
    </Switch>
  )
}

export default mainPg
