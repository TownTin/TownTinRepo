import React, { Fragment } from 'react';
import './Navbar.css';
import { BrowserRouter as Router,Link, NavLink,Route } from 'react-router-dom';
import Subscription from '../Subscription/Subscription';
import FoodMenu from '../FoodMenu/FoodMenu';
import Carousel from '../Carousel/Carousel';
import About from '../About/About';
import Modal from '../Modal/Modal';


const Navbar = () => {
    return (
        <Router>
        <Fragment>
            <header id="header">
                <nav className="navbar fixed-top navbar-expand-lg">
                    <h2 className="logo">TownTin</h2>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="navbar-toggler-icon"></div>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                    <NavLink className="nav-link" to="/Carousel/Carousel">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/FoodMenu/FoodMenu">Food Menu</Link>
                            </li>
                            <li className="nav-item">
                                    <NavLink className="nav-link" to="/Subscription/Subscription">Subscription</NavLink>
                            </li>
                            <li className="nav-item">
                                    <NavLink className="nav-link" to="/About/About">About Us</NavLink>
                            </li>
                        </ul>
                            <button type="button" className="btn btn-light my-2 my-sm-0" data-toggle="modal" data-target="#modal">Contact Us</button>
                            <Modal/>
                            
                    </div>

                </nav>
                </header>
                <Route path="/Carousel/Carousel" component={Carousel} />
                <Route path="/FoodMenu/FoodMenu" component={FoodMenu} />
                <Route path="/Subscription/Subscription" component={Subscription} />
                <Route path="/About/About" component={About} />
                
            </Fragment>
        </Router>
    )
}

export default Navbar;
