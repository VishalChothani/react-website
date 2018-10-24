import React, {Component} from 'react';
import './HeaderMain.scss';
import NavBarMobile from './NavBarMobile';
import logo from '../../../img/logo.png';
import configurationService from '../../../js/Common/configurationService';

export default class HeaderMain extends Component{
  constructor(){
    super();
    this.state = {
      isNavBarOpen : false,
    }
  }

  openMobileNavBar = () => {
    this.setState({isNavBarOpen: !this.state.isNavBarOpen});
  }

  render(){
    const isInMobile = configurationService.isInMobile();
    const {
      isNavBarOpen,
    } = this.state;
    return(
      <React.Fragment>
        { isInMobile &&
          <header className="mobile-header-bar width-full border-bot padding-h-md">
            { !isNavBarOpen && <span className="fas fa-bars" onClick={() => this.openMobileNavBar()}></span> }
            { isNavBarOpen && <span className="fas fa-times" onClick={() => this.openMobileNavBar()}></span> }
            <img className="logo" src={logo} alt="Logo" />
            { isNavBarOpen && <NavBarMobile /> }
          </header> 
        }
        </React.Fragment>
    )
  }
}
