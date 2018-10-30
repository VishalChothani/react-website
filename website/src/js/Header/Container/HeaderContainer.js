import React, {Component} from 'react';
import NavBar from '../Component/NavBarComponent';
import logo from '../../../img/label.jpeg';

import { connect } from 'react-redux';

class HeaderContainer extends Component{

  constructor(){
    super();
    this.state = {
      logoClassName : "logo",
      headerBarClassName: "header-bar",
    }
  }

  componentDidMount(){
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 0) {
        this.setState({ logoClassName: "logo compact" });
        this.setState({ headerBarClassName: "header-bar add-background" });
      } else {
        this.setState({ logoClassName: "logo" });
        this.setState({ headerBarClassName: "header-bar" });
      }
    }
  }

  render(){
    const {
      headerList,
    } = this.props;

    const {
      logoClassName,
      headerBarClassName,
    } = this.state;
  
    return(
      <div className={headerBarClassName}>
        <img className={logoClassName} src={logo} alt="logo" />
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
