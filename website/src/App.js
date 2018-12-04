import React, { Component } from 'react';
import './App.scss';
import PreLoaderScreen from './js/PreLoader/Component/PreLoaderComponent';
import ScreenLoaderComponent from './js/ScreenLoader/Component/ScreenLoaderComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PreLoaderScreen />
        <ScreenLoaderComponent />
      </div>
    );
  }
}

export default App;
