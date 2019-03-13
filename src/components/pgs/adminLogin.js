import React,{Component} from 'react'
import AdminLoginForm from '../adminLoginForm'
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { adminLoginValidation, updateUserName, updatePass, signBtnClicked, fetchAdmins } from '../../redux/actions'
import { connect } from 'react-redux'


class AdminLogin extends Component{

    render(){

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-offset-4 col-lg-4" style={{}}>
                        <div className="block-unit" style={{textAlign:'center', padding:'8px 8px 8px 8px'}}>
                            <h1 style={{color:'white'}}>Administration Login</h1>
                            <br />   
                            <img src="images/face80x80.jpg" alt="" className="img-circle" />
                            <br />
                            <br />
                            {/* <button onClick={e=>this.test(e.target.value)}>Test</button> */}
                            <AdminLoginForm onSubmit={ this.onSubmit }/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentWillMount(){
        this.props.fetchAdmins()
        console.log(this.props.admins)

    }

    // test(e){
    //     this.props.signBtnClicked(e)
    //     console.log(this.props.test)
    // }

    usernameEntered(e){
        this.formDetails.username = e; 
        console.log(this.props.username)
    }

    passwordEntered(e){
        this.formDetails.password = e; 
        console.log(this.props.password)
    }
    
    onSubmit = values=>{
        // console.log(values)

        if(!(values.username || values.password)){
            console.log('No data entered');
        }else{
            this.props.admins.map(a=>{
                if(a.username === values.username && a.password === values.password){
                    this.props.history.push('/adminPayment')
                    console.log('logged in'); 
                }else{
                    console.log('Failed to login')
                }
            })
        }
    }
}

const mapStateToProps = (state)=>{
    return{
        adminDetails:state.AdminLogin,
        test:state.Test,
        admins:state.FetchAdmins,
    }
}

const mapDispatchToProps = (dispatch)=>{
   return bindActionCreators({signBtnClicked, adminLoginValidation, updateUserName, updatePass, fetchAdmins}, dispatch)
} 

export default connect(mapStateToProps,mapDispatchToProps)(AdminLogin);
