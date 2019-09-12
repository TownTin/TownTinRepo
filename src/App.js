import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
// import Carousel from './Components/Carousel/Carousel';
// import FoodMenu from './Components/FoodMenu/FoodMenu';
// import Subscription from './Components/Subscription/Subscription';
// import About from './Components/About/About';
import Values from './Components/Values/Values';
import Footer from './Components/Footer/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
        <div className="container-fluid">
          <Navbar />
          {/* <Route exact path="/" component={Carousel} /> */}
          {/* <Route path="/Components/FoodMenu/FoodMenu" exact component={FoodMenu} /> */}
          {/* <Route path="/Components/Subscription/Subscription" component={Subscription} /> */}
          {/* <Route path="/Components/About/About" component={About} /> */}
          {/* <Carousel/>
          <FoodMenu/>
          <Subscription/>
          <About /> */}
          <Values/>
          <Footer/>
        </div>
    )
  }
}


export default App;
