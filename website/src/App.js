import React, { Component } from 'react';
import './App.scss';
import PreLoaderScreen from './js/PreLoader/Component/PreLoaderComponent';
import HomePage from './js/HomePage/Component/HomePageComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PreLoaderScreen />
        <HomePage />
      </div>
    );
  }
}

export default App;
