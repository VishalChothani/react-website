import React, {Component} from 'react';
import NavBar from '../Component/NavBarComponent';
import logo from '../../../img/label.jpeg';

import { connect } from 'react-redux';

class HeaderContainer extends Component{

  render(){
    const {
      headerList,
    } = this.props;
    
    return(
      <div className="header-bar">
        <img className="fixed-logo compact pointer" src={logo} alt="logo" />
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
