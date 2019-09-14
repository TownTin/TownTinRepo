import React from 'react';
import './Admin.css';
import {BrowserRouter as Router,Route, NavLink } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';

const Admin = () => {
    return (
        <div className="bg-black">
            <Router>
                <nav>
                    <button><NavLink className="loginLink" to="/LoginPage/LoginPage">AL</NavLink></button>
                </nav>
                <Route path="/LoginPage/LoginPage" exact component={LoginPage} />
            </Router>
        </div>
    )
}

export default Admin
