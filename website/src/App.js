import React, { Component } from 'react';
import './App.scss';
import HomePageComponent from './js/HomePage/Component/HomePageComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePageComponent />
      </div>
    );
  }
}

export default App;
