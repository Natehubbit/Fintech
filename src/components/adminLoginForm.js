import React from 'react'
import { Field, reduxForm } from 'redux-form'

const AdminLoginForm = props =>{
    const { handleSubmit } = props

        return(
            <form onSubmit={handleSubmit}>
                <div className="cmxform center-block" id="signupForm" style={{textAlign:'center'}}>
                    <div className='unm'>
                        <Field name="username"  type="text" placeholder="Username" component="input" />
                    </div>
                    <div className='pwd'>
                        <Field name="password"  type="password" placeholder="Password" component="input" />
                    </div> 
                    <input name='submit' className="submit btn-success btn btn-large" value='Login' type='submit'/>
                </div>
            </form>
        )
        
}

export default reduxForm({
    form:'AdminLogin'
})(AdminLoginForm)