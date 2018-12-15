import React, {Component} from 'react';
import { Route } from "react-router-dom";
import App from './App';
import Header from './js/Header/Container/HeaderContainer';
import ContactUs from './js/ContactUs/Component/ContactUsComponent';
import CollectionContainer from './js/Collection/Container/CollectionContainer';

export default class Router extends Component{
  render(){
    return(
      <div>
        <Header />
        <Route exact path='/' component={App} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/men' component={CollectionContainer} />
        <Route path='/women' component={CollectionContainer} />
        <Route path='/kids' component={CollectionContainer} />
      </div>
    )
  }
}
