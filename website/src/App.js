import React, { Component } from 'react';
import './App.scss';
import PreLoaderComponent from './js/PreLoader/Component/PreLoaderComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PreLoaderComponent />
      </div>
    );
  }
}

export default App;
