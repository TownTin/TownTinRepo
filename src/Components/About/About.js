import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-feedback container">
            <div className="row">
                <div className="aboutus col-xs-6 col-sm-6 col-md-6 bg-white">
                    <h2>About Us</h2>
                    <p>We provide tasty hiegenic home quality food in best price.</p>
                </div>
                <div className="feedback col-xs-6 col-sm-6 col-md-6">
                    <h2>We Value Your Feedback</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobile">Your Mobile Number</label>
                            <input type="tel" className="form-control" id="mobile" placeholder="Your Mobile Number" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment">Comments</label>
                            <textarea className="form-control" rows="3" id="comment" placeholder="Please Provide Your Feedback" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-light ml-auto">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default About;
