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

const mainPg = () => {
  return (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/adminLogin" component={AdminLogin}/>
        <Route path="/adminPayment" component={AdminPayment}/>
        <Route path="/srcLogin" component={SrcLogin}/>
        <Route path="/reports" component={Reports}/>
        <Route path="/srcPayment" component={SrcPayment}/>
        <Route path='/transactions' component={Transactions}></Route>
        <Route path='/budget' component={Budget}></Route>
        <Route path='/wallet' component={Wallet}></Route>
        <Route path='/profile' component={Profile}></Route>
    </Switch>
  )
}

export default mainPg
