import React, {Component} from 'react';
import './nav-bar.scss';

export default class NavBarComponent extends Component{

  constructor(){
    super();
    this.state = {
      isNavBarOpen : false,
    }
  }

  openMobileNavBar = () => {
    this.setState({isNavBarOpen: !this.state.isNavBarOpen});
  }
  
  renderList(){
    return this.props.headerList.map((headerList) => {
      return ( <li className="h3 padding-v-sm uppercase" key={headerList}>{headerList}</li> )
    })
  }

  render(){
    const {
      isNavBarOpen,
    } = this.state;
    return(
      <React.Fragment>
        <header className="header-icon pointer">
          { !isNavBarOpen && <span className="fas fa-bars" onClick={() => this.openMobileNavBar()}></span> }
          { isNavBarOpen && <span className="fas fa-times white" onClick={() => this.openMobileNavBar()}></span> }
        </header>
        { isNavBarOpen &&
          <nav className="nav-bar">
            <ul className="align-center">
              { this.renderList() }
            </ul>
          </nav>
        }
      </React.Fragment>
    )
  }
}
