import React, { Component } from 'react';
import './App.scss';
import Cookies from 'universal-cookie';
import PreLoaderScreen from './js/PreLoader/Component/PreLoaderComponent';
import HomePage from './js/HomePage/Component/HomePageComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPreLoader: false,
    };
  }

  componentDidMount(){
    const cookies = new Cookies();
    const cookieExpire = 15*60*1000; // 15mins 
    const cookieName = "preLoaderCookie";

    if(!cookies.get(cookieName)){
      cookies.set(cookieName, true, { expires: new Date(Date.now()+cookieExpire) });
      this.setState({ showPreLoader: true });
    } 
  }

  render() {
    const {
      showPreLoader
    } = this.state;
    return (
      <div className="App">
        { showPreLoader && <PreLoaderScreen /> }
        <HomePage />
      </div>
    );
  }
}

export default App;
