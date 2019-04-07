import React,{Component} from 'react'
import { connect,} from 'react-redux'
import { bindActionCreators } from 'redux'
import { Col } from 'react-bootstrap'
import { loadOrgData } from '../redux/actions'

class orgDetails extends Component{

  componentWillMount(dispatch){
    this.props.loadOrgData()
    // console.log('component has mounted data',this.props);
  }

  componentDidUpdate(){
    this.props.loadOrgData()
  }

  render(){
    return (
      <div className='orgDetails'>
          <h4 className='wallet-head' >Personal/Organization Details</h4>
          <Col md= {3}>
              <img className='img-circle' src='./images/face.jpg' alt='user' height={100} style={{marginTop:'20px'}}  />
          </Col>
          <Col md={9}>
              <ul>
                  <li><strong className='name'>Name:</strong> {this.props.data.first_name+' '+this.props.data.last_name}</li>
                  <li><strong className='address'>Address:</strong> {this.props.data.eth_address}</li>
                  <li><strong className='contact'>Contact:</strong> {this.props.data.contact} </li>
              </ul>
          </Col>
      </div>
    
    )
  }
    
}

const mapStateToprops = state =>{
  return{
      data: state.Data
  }
}

const mapDispatchToprops= dispatch=>{
  return bindActionCreators({loadOrgData},dispatch)
}

export default connect(mapStateToprops,mapDispatchToprops)(orgDetails)
