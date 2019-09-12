import React from 'react';
import './Subscription.css'

const Subscription = () => {
    return (
        <section id="subscription">
            <h2>Subscriptions</h2>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="subscription-single">
                            <div className="content-area">
                                <div className="side-one">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <div>
                                                <h3>Daily Subscription</h3>
                                                <p>Choose your daily subscription here</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="side-two">
                                    <div className="card">
                                        <div className="card-body text-center mt-4">
                                            <h4>Details</h4>
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="subscription-single">
                            <div className="content-area">
                                <div className="side-one">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <div>
                                                <h3>Weekly Subscription</h3>
                                                <p>Choose your weekly subscription here</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="side-two">
                                    <div className="card">
                                        <div className="card-body text-center mt-4">
                                            <h4>Details</h4>
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="subscription-single">
                            <div className="content-area">
                                <div className="side-one">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <div>
                                                <h3>Monthly Subscription</h3>
                                                <p>Choose your monthly subscription here</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="side-two">
                                    <div className="card">
                                        <div className="card-body text-center mt-4">
                                            <h4>Details</h4>
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Subscription;
