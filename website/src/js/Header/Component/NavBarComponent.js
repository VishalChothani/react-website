import React, {Component} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import './nav-bar.scss';

export default class NavBarComponent extends Component{

  constructor(){
    super();
    this.state = {
      isNavBarOpen : false,
    }
  }

  toggleMobileNavBar = () => {
    this.setState({isNavBarOpen: !this.state.isNavBarOpen});
  }

  activateHeaderOption = (headerOption) => {
    this.props.SelectHeaderOption(headerOption);
    this.toggleMobileNavBar();
  }
  
  renderList(){
    return this.props.headerList.map((headerList) => {
      return ( <li 
        className={classNames('h3 padding-v-sm uppercase pointer', {'snapchat': headerList===this.props.activeHeaderOption})}
        key={headerList} 
        onClick={ () => { this.activateHeaderOption(headerList) } }>
          <Link to={"/"+headerList}>
            {headerList}
          </Link>
        </li> 
      )
    })
  }

  render(){
    const {
      isNavBarOpen,
    } = this.state;
    return(
      <React.Fragment>
        <header className="header-icon pointer">
          { !isNavBarOpen && <span className="fas fa-bars" onClick={() => this.toggleMobileNavBar()}></span> }
          { isNavBarOpen && <span className="fas fa-times white" onClick={() => this.toggleMobileNavBar()}></span> }
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
