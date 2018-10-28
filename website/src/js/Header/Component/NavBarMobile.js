import React, {Component} from 'react';
import './NavBarMobile.scss';

export default class NavBarMobile extends Component{
  
  renderList(){
    return this.props.headerList.map((headerList) => {
      return ( <li className="h3 padding-v-sm uppercase" key={headerList}>{headerList}</li> )
    })
  }

  render(){
    return(
      <nav className="nav-bar-mobile">
        <ul>
          { this.renderList() }
        </ul>
      </nav>
    )
  }
}
