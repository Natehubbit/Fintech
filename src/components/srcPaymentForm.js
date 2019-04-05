import React from 'react'
import { Field, reduxForm } from 'redux-form'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const SrcPayment = props =>{

    const { handleSubmit } = props
    // console.log(props)
        return(
            <form onSubmit={handleSubmit}>
                <div className="panel-body">
                    <h1 className="center-block">Make Payment</h1>
                    <p><i className="fa fa-location-arrow"></i><Field name='walletAddress' type="text" placeholder="Wallet Address" component='input'/></p>
                    <p><i className="fa fa-star"></i><Field name='purpose' type="text" placeholder="Purpose" component='input'/></p>
                    {/* <p className='center-block' style={{textAlign:'center'}}><strong>OR</strong></p> */}
                    {/* <div className="name"><i className="fa fa-user "></i><Field className= 'fname' name='firstName' type="text" placeholder="First Name" component='input'/><Field className= 'lname' name='lastName' type="text" placeholder="Last Name" component='input'/></div> */}
                    <p><i className="fa fa-money"></i><Field name='amount' type="text" placeholder="Amount" component='input'/></p>
                    
                    {/* <ReactCSSTransitionGroup
                    transitionName='example'
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    >
                    { 
                        !props.viewOrgDetails &&
                        (
                        <div>
                            <p className="org-name"><i className="fa fa-users "></i><Field name='orgName' type="text" onChange = {e=>props.getAddress(e.target.value)} placeholder="Organisation Name" component='input'/></p>
                            <p className="org-loc"><i className="fa fa-map-marker "></i><Field name='orgLoc' type="text" placeholder="Organisation Location" component='input'/></p>
                        </div>
                        )
                    }
                    </ReactCSSTransitionGroup> */}
                </div>
                <div className="panel-footer"><button type='submit' onClick={()=>send(props)} className="btn btn-success center-block">Send</button></div>
            </form>
        )
        
}

const send = (props)=>{
    setTimeout(()=>props.destroy(),500)
}

export default reduxForm({
    form:'SrcPayment'
})(SrcPayment)