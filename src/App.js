import React, { Component } from 'react';
import Navbar from './Components/Header/Navbar';
import Values from './Components/Values/Values';
import Footer from './Components/Footer/Footer';
import './App.css';
// import ErrorPage from './Components/ErrorPage/ErrorPage';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleModalShowClick = this.handleModalShowClick.bind(this);
    this.handleModalCloseClick = this.handleModalCloseClick.bind(this);
    this.state = {
      showModal: false,
    }
  }

  handleModalShowClick(e) {
    e.preventDefault();
    this.setState({
      showModal: true
    })
  }

  handleModalCloseClick() {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <div className="container-fluid">
         <Navbar showModal={this.state} handleModalShowClick={this.handleModalShowClick} handleModalCloseClick={this.handleModalCloseClick}/>
         <Values/>
          <Footer/>
        {/* <ErrorPage/> */}
        </div>
    )
  }
}


export default App;
