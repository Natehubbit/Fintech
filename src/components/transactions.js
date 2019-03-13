import React from 'react';
import {Link} from 'react-router-dom';

const transactions = () => {
    return (
		// <Col sm={6} lg={6}>
		<div className='col-sm-6 col-lg-6'>
				<div className="dash-unit">
					<dtitle>Latest Transactions</dtitle>
					<hr />
					<div className="framemail">
						<div className="window">
							<ul className="mail">
								<li>
									<i className="unread"></i>
									<img className="avatar" src="images/photo01.jpeg" alt="avatar"/>
									<p className="sender">Tx. Hash: 0x56EF...90</p>
									<p className="message"><strong>Amount</strong> 1 UMC</p>
									<div className="actions">
										<a><img src="http://png-1.findicons.com/files//icons/2232/wireframe_mono/16/undo.png" alt="reply"/></a>
										<a><img src="http://png-1.findicons.com/files//icons/2232/wireframe_mono/16/star_fav.png" alt="favourite"/></a>
										<a><img src="http://png-4.findicons.com/files//icons/2232/wireframe_mono/16/tag.png" alt="label"/></a>
										<a><img src="http://png-4.findicons.com/files//icons/2232/wireframe_mono/16/trash.png" alt="delete"/></a>
									</div>
								</li>
								<li>
									<i className="read"></i>
									<img className="avatar" src="images/photo02.jpg" alt="avatar"/>
									<p className="sender">Tx. Hash: 0x10AF...10</p>
									<p className="message"><strong>Amount:</strong> 500 UMC</p>
									<div className="actions">
										<a><img src="http://png-1.findicons.com/files//icons/2232/wireframe_mono/16/undo.png" alt="reply"/></a>
										<a><img src="http://png-1.findicons.com/files//icons/2232/wireframe_mono/16/star_fav.png" alt="favourite"/></a>
										<a><img src="http://png-4.findicons.com/files//icons/2232/wireframe_mono/16/tag.png" alt="label"/></a>
										<a><img src="http://png-4.findicons.com/files//icons/2232/wireframe_mono/16/trash.png" alt="delete"/></a>
									</div>
								</li>
								<li>
									<i className="read"></i>
									<img className="avatar" src="images/photo03.jpg" alt="avatar"/>
									<p className="sender">Tx. Hash: 0xf234...77</p>
									<p className="message"><strong>Amount:</strong> 50 UMC</p>
									<div className="actions">
										<a><img src="http://png-1.findicons.com/files//icons/2232/wireframe_mono/16/undo.png" alt="reply"/></a>
										<a><img src="http://png-1.findicons.com/files//icons/2232/wireframe_mono/16/star_fav.png" alt="favourite"/></a>
										<a><img src="http://png-4.findicons.com/files//icons/2232/wireframe_mono/16/tag.png" alt="label"/></a>
										<a><img src="http://png-4.findicons.com/files//icons/2232/wireframe_mono/16/trash.png" alt="delete"/></a>
									</div>
								</li>
								<li>
									<i className="read"></i>
									<img className="avatar" src="images/photo04.jpg" alt="avatar"/>
									<p className="sender">Tx. Hash: 0x56EF...90</p>
									<p className="message"><strong>Amount:</strong> 2,000 UMC</p>
									<div className="actions">
										<a><img src="http://png-1.findicons.com/files//icons/2232/wireframe_mono/16/undo.png" alt="reply"/></a>
										<a><img src="http://png-1.findicons.com/files//icons/2232/wireframe_mono/16/star_fav.png" alt="favourite"/></a>
										<a><img src="http://png-4.findicons.com/files//icons/2232/wireframe_mono/16/tag.png" alt="label"/></a>
										<a><img src="http://png-4.findicons.com/files//icons/2232/wireframe_mono/16/trash.png" alt="delete"/></a>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="row text-center">
						<Link to='/transactions' ><button className="btn btn-success">View Transactions</button></Link>
					</div>
                </div>
			{/* </Col> */}
			</div>
    );
}

export default transactions;
