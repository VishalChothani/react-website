import React, { Component } from 'react';
import './App.scss';
import { CookiesProvider } from 'react-cookie';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import PreLoaderScreen from './js/PreLoader/Component/PreLoaderComponent';
import HomePage from './js/HomePage/Component/HomePageComponent';

class App extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      showPreLoader: false,
    };
  }

  componentDidMount(){
    const { cookies } = this.props;
    const cookieExpire = 15*60*1000; // 15mins 
    const cookieName = "preLoaderCookie";

    if(!cookies.get(cookieName)){
      cookies.set(cookieName, true);
      this.setState({ showPreLoader: true });
      setTimeout(() => {
        cookies.remove(cookieName);
      }, cookieExpire);
    } 
  }

  render() {
    const {
      showPreLoader
    } = this.state;
    return (
      <CookiesProvider>
        <div className="App">
          { showPreLoader && <PreLoaderScreen /> }
          <HomePage />
        </div>
      </CookiesProvider>
    );
  }
}

export default withCookies(App);
