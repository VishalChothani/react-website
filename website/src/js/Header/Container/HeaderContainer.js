import React, {Component} from 'react';
import NavBar from '../Component/NavBarComponent';
import logo from '../../../img/logo.png';

import { connect } from 'react-redux';

class HeaderContainer extends Component{

  render(){
    const {
      headerList,
    } = this.props;
    
    return(
      <div className="header-bar">
        <div className="fixed-logo compact pointer">
          <img className="responsive-img" src={logo} alt="logo" />
        </div>
        <NavBar headerList={headerList} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    headerList: state.headerList,
  }
}

export default connect(mapStateToProps)(HeaderContainer);
