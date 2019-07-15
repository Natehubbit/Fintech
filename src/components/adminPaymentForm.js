import React from 'react'

const AdminPaymentForm = (props) => {
	console.log(props.organizationDetails);
	console.log(props.orgState);
    return(
        // <div className="col-lg-6 col-sm-6 col-md-6">
		// 	<div className="panel panel-default adminPayment">
		// 		<div className="panel-body">
		// 			<h1 className="center-block">Make Payment</h1>
		// 			<p><i className="fa fa-location-arrow"></i><input type="text" placeholder="Address"/></p>
		// 			<p><i className="fa fa-money"></i><input type="text" placeholder="Amount"/></p>
		// 			{
		// 				props.orgState ? (
		// 					<div>
		// 						<p className="org-name"><i className="fa fa-object-group "></i><input type="text" placeholder="Organisation Name"/></p>
		// 						<p className="org-loc"><i className="fa fa-clock-o "></i><input type="text" placeholder="Organisation Location"/></p>
		// 					</div>
		// 				) : <div></div>
		// 			}
					
		// 		</div>
		// 		<div className="panel-footer"><button className="btn btn-success center-block">Send</button></div>
		// 	</div>
		// 	<button className="btn btn-info btn-lg center-block org" onClick={props.viewOrg} style={{width:'100%'}}>Pay to Organisation</button>
		// </div>
//     );
// }
    
// export default AdminPaymentForm;


