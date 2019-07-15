import React from 'react'

const profile = () => {
  return (
    <div className="container">
        <div className="row">

        	<div className="col-lg-12">
        		
        		<div className="register-info-wraper">
        			<div id="register-info">
        				<div className="cont2">
        					<div className="thumbnail">
								<img src="../images/face.jpg" alt="Marcel Newman" className="img-circle"/>
							</div>
                            {/* <!-- /thumbnail --> */}
							<h2>Marcel Newman</h2>
        				</div>
        				<div className="row">
        					<div className="col-lg-6">
        						<div className="cont3">
        							<p><ok>Username:</ok> BASICOH</p>
        							<p><ok>Mail:</ok> hola@basicoh.com</p>
        							<p><ok>Location:</ok> Madrid, Spain</p>
        							<p><ok>Address:</ok> Blahblah Ave. 879</p>
        						</div>
        					</div>
        					<div className="col-lg-6">
        						<div className="cont3">
        						<p><ok>Registered:</ok> April 9, 2010</p>
        						<p><ok>Last Login:</ok> January 29, 2013</p>
        						<p><ok>Phone:</ok> +34 619 663553</p>
        						<p><ok>Mobile</ok> +34 603 093384</p>
        						</div>
        					</div>
        				</div>
                        {/* <!-- /inner row --> */}
						<hr/>
						<div className="cont2">
							<h2>Choose Your Option</h2>
						</div>
						<br/>
							<div className="info-user2">
								<span aria-hidden="true" className="li_user fs1"></span>
								<span aria-hidden="true" className="li_settings fs1"></span>
								<span aria-hidden="true" className="li_mail fs1"></span>
								<span aria-hidden="true" className="li_key fs1"></span>
								<span aria-hidden="true" className="li_lock fs1"></span>
								<span aria-hidden="true" className="li_pen fs1"></span>
							</div>

        				
        			</div>
        		</div>

        	</div>

        </div>
    </div>
  )
}

export default profile
