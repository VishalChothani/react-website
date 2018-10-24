import React, {Component} from 'react';
import './NavBarMobile.scss';

export default class NavBarMobile extends Component{
  render(){
    return(
      <nav className="nav-bar-mobile">
        <ul>
          <li className="h3 padding-v-sm uppercase">Women</li>
          <li className="h3 padding-v-sm uppercase">Men</li>
          <li className="h3 padding-v-sm uppercase">Kids</li>
          <li className="h3 padding-v-sm uppercase">Gift Cards</li>
          <li className="h3 padding-v-sm uppercase">About Us</li>
          <li className="h3 padding-v-sm uppercase">Contact Us</li>
        </ul>
      </nav>
    )
  }
}
