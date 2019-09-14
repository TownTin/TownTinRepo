import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className="container login">
            <h1>TownTin</h1>
            <p><strong><em>This page is for Admin usage purpose</em></strong></p>
            <div>
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Login</h5>
                                <form className="form-signin">
                                    <div className="form-label-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" className="form-control" placeholder="Email" required autofocus/>
                                            
                                    </div>
                                    <div className="form-label-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="password" className="form-control" placeholder="Password" required/>
                                        
                                    </div>
                                    <button className="btn btn-light text-uppercase" type="submit">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

    )
}

export default LoginPage
