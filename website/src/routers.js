import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import App from './App';
import Header from './js/Header/Container/HeaderContainer';
import HomePage from './js/HomePage/Component/HomePageComponent';
import ContactUs from './js/ContactUs/Component/ContactUsComponent';
import Product from './js/Product/Container/ProductContainer';
import MensCollectionContainer from './js/MensCollection/Container/MensCollectionContainer';
import WomensCollectionContainer from './js/WomensCollection/Container/WomensCollectionContainer';
import KidsCollectionContainer from './js/KidsCollection/Container/KidsCollectionContainer';
import AboutUs from './js/AboutUs/Component/AboutUsComponent';
import NotFound from './js/NotFound/Component/NotFoundComponent';

export default class Router extends Component{
  render(){
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/home' component={HomePage} />
          <Route path='/contact' component={ContactUs} />
          <Route exact path='/men' component={MensCollectionContainer} />
          <Route exact path='/women' component={WomensCollectionContainer} />
          <Route exact path='/kids' component={KidsCollectionContainer} />
          <Route path='*/product/:productId' component={Product} />
          <Route path='/about' component={AboutUs} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}
