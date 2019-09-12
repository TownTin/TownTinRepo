import React from 'react';
import { Link } from 'react-router-dom';
// import 'jquery';
// import 'popper.js';
import './Carousel.css';
import bg1 from '../../images/bg1.jpg';
import bg2 from '../../images/bg2.jpg';
import bg3 from '../../images/bg3.jpg';


const Carousel = () => {
    return (
        <section className="Homepage my-1">
            <div id="carouselControls" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="8000">
                        <img src={bg1} className="d-block w-100" alt="food img" />
                        <div className="overlay">
                            <h1 className="display-4">Welcome To TownTin</h1>
                            <p className="calldetails">CALL US NOW - 7008412519, 7008835391</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="4000">
                        <img src={bg2} className="d-block w-100" alt="food img" />
                        <div className="overlay">
                            <strong>ARE YOU MISSING HOME FOOD ?</strong> <br />
                            <p className="hometext">NO WORRIES !!! WE WILL PROVIDE YOUR FAVOURITE FOOD</p>
                            <div className="d-flex justify-content-lg-around container align-items-center">
                            <button className="btn btn-lg btn-dark pr-5 pl-5"><Link className="nav-link border-0" to="/FoodMenu/FoodMenu">OUR MENU</Link></button> 
                                <button className="btn btn-lg btn-dark"><Link className="nav-link border-0" to="/Subscription/Subscription">OUR SUBSCRIPTION PLANS </Link></button> 
                             </div>   
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="4000">
                        <img src={bg3} className="d-block w-100" alt="food img" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section> 
    )
        
}


export default Carousel;


