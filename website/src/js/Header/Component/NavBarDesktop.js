import React, {Component} from 'react';
import './NavBarDesktop.scss';
import logo from '../../../img/logo.png';

export default class NavBarDesktop extends Component{
  render(){
    return(
      <ul className="header-bar nav-bar-desktop width-full border-bot">
        <li className="h4 pointer">Women</li>
        <li className="h4 pointer">Men</li>
        <li className="h4 pointer">Kids</li>
        <li className="h4 pointer">
          <img className="logo" src={logo} alt="Logo" />
        </li>
        <li className="h4 pointer">Gift Cards</li>
        <li className="h4 pointer">About Us</li>
        <li className="h4 pointer">Contact Us</li>
      </ul>
    )
  }
}
