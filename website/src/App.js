import React, { Component } from 'react';
import './App.scss';
import Header from './js/Header/Component/HeaderMain';
import Carousel from './js/Carousel/Component/Carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Carousel />
      </div>
    );
  }
}

export default App;
