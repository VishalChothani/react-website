import React, {Component} from 'react';
import NavBar from '../Component/NavBarComponent';
import logo from '../../../img/logo.png';

import { connect } from 'react-redux';
import { SelectHeaderOption } from '../Actions/HeaderAction';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {CONSTANTS} from '../../Common/Constants';

class HeaderContainer extends Component{

  render(){
    const {
      headerList,
      SelectHeaderOption,
      activeHeaderOption,
    } = this.props;
    
    return(
      <div className="header-bar">
        <div className="fixed-logo compact pointer">
          <Link to={"/"+CONSTANTS.pages.home} id="logo"><img className="responsive-img" src={logo} alt="logo" /></Link>
        </div>
        <NavBar 
          headerList={headerList} 
          SelectHeaderOption={SelectHeaderOption}
          activeHeaderOption={activeHeaderOption} 
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    headerList: state.headerList,
    activeHeaderOption: state.activeHeaderOption,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({SelectHeaderOption:SelectHeaderOption}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);
