import React,{Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { bindActionCreators } from 'redux';
import { viewOrganizationDetailsSrc } from '../../redux/actions'
import { connect } from 'react-redux'


class srcPayment extends Component{
  createTransaction(){
    
  }
  // constructor(){
  //   super();

  //   this.state = {
  //     view:false
  //   }
  //   this.organizationDetails = this.organizationDetails.bind(this)
  // }

  // organizationDetails(){
  //   this.setState(prevState =>({
  //     view: !prevState.view
  //   }))
  //   console.log('orgDetails()',this.state.view)
  //   return this.state.view;
  // }

  render(){
    return (
      <div className="container">
        <div className="col-lg-6 col-sm-6 col-md-6">
          <div className="panel panel-success">
            <div className="panel-heading">
              Transaction History
            </div>
                {/* <!-- <hr /> --> */}
                    
            <div className="panel-body pending-transactions" >
              <ul className="list-group">
                <li className="list-group-item list-group-item-success">
                  <p><strong className="from">From:</strong> <i>SRC</i></p>
                  <p><strong className="to">To:</strong> <i>William Ntisem</i></p>
                  <p><strong>Amount:</strong> <i>500UMC</i></p>
                </li>
              </ul> 
            </div>

            <div className="panel-footer">
              <button className="btn btn-success center-block">Transactions</button>
            </div>
          
          </div>
        </div>
        <div className="col-lg-6 col-sm-6 col-md-6">
          <div className="panel panel-default adminPayment">
            <div className="panel-body">
              <h1 className="center-block">Make Payment</h1>
              <p><i className="fa fa-location-arrow"></i><input type="text" placeholder="Address"/></p>
              <p><i className="fa fa-money"></i><input type="text" placeholder="Amount"/></p>
            
            <ReactCSSTransitionGroup
              transitionName='example'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
              { 
                !this.props.viewOrgDetails &&
                (
                  <div>
                    <p className="org-name"><i className="fa fa-object-group "></i><input type="text" placeholder="Organisation Name"/></p>
                    <p className="org-loc"><i className="fa fa-clock-o "></i><input type="text" placeholder="Organisation Location"/></p>
                  </div>
                )
              }
            </ReactCSSTransitionGroup>
            
            </div>
            <div className="panel-footer"><button className="btn btn-success center-block">Send</button></div>
          </div>
          <button className="btn btn-info btn-lg center-block org" onClick={()=>this.props.viewOrganizationDetailsSrc(this.props.viewOrgDetails)} style={{width:'100%'}}>Pay to Organisation</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state=>{
  return {
    viewOrgDetails: state.SrcUi,
    web3: state.InitWeb3,
  }
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({viewOrganizationDetailsSrc},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(srcPayment)
