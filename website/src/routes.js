import React, {Component} from 'react';
import { Route } from "react-router-dom";
import App from './App';
import Header from './js/Header/Container/HeaderContainer';
import HomePage from './js/HomePage/Component/HomePageComponent';
import ContactUs from './js/ContactUs/Component/ContactUsComponent';
import Product from './js/Product/Component/ProductComponent';
import MensCollectionContainer from './js/MensCollection/Container/MensCollectionContainer';
import WomensCollectionContainer from './js/WomensCollection/Container/WomensCollectionContainer';
import KidsCollectionContainer from './js/KidsCollection/Container/KidsCollectionContainer';

export default class Router extends Component{
  render(){
    return(
      <div>
        <Header />
        <Route exact path='/' component={App} />
        <Route exact path='/home' component={HomePage} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/men' component={MensCollectionContainer} />
        <Route path='/women' component={WomensCollectionContainer} />
        <Route path='/kids' component={KidsCollectionContainer} />
        <Route path='/product/:productId' component={Product} />
      </div>
    )
  }
}
