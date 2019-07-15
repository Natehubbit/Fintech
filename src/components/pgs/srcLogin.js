import React from 'react'

const srcLogin = () => {
  return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-offset-4 col-lg-4" style={{marginTop:'100px'}}>
                        <div className="block-unit" style={{textAlign:'center', padding:'8px 8px 8px 8px'}}>
                            <h1 style={{color:'white'}}>SRC Login</h1>
                            <br />   
                            <img src="images/face80x80.jpg" alt="" className="img-circle" />
                            <br />
                            <br />
                            <form className="cmxform" id="signupForm" method="get" action="">
                                <fieldset>
                                    <p>
                                        <input id="username" name="username" type="text" placeholder="Username" />
                                        <input id="password" name="password" type="password" placeholder="Password" />
                                    </p>
                                        <input className="submit btn-success btn btn-large" type="submit" value="Login" />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default srcLogin;
