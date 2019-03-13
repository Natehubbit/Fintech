import React from 'react'
import {Link} from 'react-router-dom'


const NavLinks = ()=>{
    return(
        // <!-- NAVIGATION MENU -->

        <div className="navbar-nav navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/"><img src="images/logo30.png" alt=""/> UMaT SRC Ledger</Link>
                </div>
                <div className="navbar-collapse collapse" >
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to='/'><i className="icon-home icon-white"></i> Home</Link></li>
                        <li><Link to='/adminLogin' ><i className="icon-th icon-white"></i> Admin Login</Link></li>
                        <li><Link to='/adminPayment' ><i className="icon-lock icon-white"></i> Admin Payment</Link></li>
                        <li><Link to='/srcLogin' ><i className="icon-user icon-white"></i> SRC Login</Link></li>
                        <li><Link to='/reports' ><i className="icon-user icon-white"></i> Reports</Link></li>
                    </ul>
                </div>{/* <!--/.nav-collapse --> */}
		    </div>
        </div>
    )
}

export default NavLinks;