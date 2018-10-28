import React, {Component} from 'react';
import NavBarMobile from '../Component/NavBarMobile';
import NavBarDesktop from '../Component/NavBarDesktop';
import logo from '../../../img/logo.png';
import configurationService from '../../Common/configurationService';
import { connect } from 'react-redux';

class HeaderContainer extends Component{
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

    const {
      headerList,
    } = this.props;

    return(
      <React.Fragment>
        { isInMobile &&
          <header className="header-bar width-full border-bot padding-h-md">
            { !isNavBarOpen && <span className="fas fa-bars" onClick={() => this.openMobileNavBar()}></span> }
            { isNavBarOpen && <span className="fas fa-times" onClick={() => this.openMobileNavBar()}></span> }
            <img className="logo" src={logo} alt="Logo" />
            { isNavBarOpen && <NavBarMobile  headerList={headerList} /> }
          </header> 
        }
        { !isInMobile && 
          <NavBarDesktop />
        }
        </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    headerList: state.headerList,
  }
}

export default connect(mapStateToProps)(HeaderContainer);