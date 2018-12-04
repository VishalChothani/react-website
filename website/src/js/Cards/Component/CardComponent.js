import React, {Component} from 'react';
import './Card.scss';

export default class CardComponent extends Component{
  render(){
    const {
      children,
    } = this.props;

    return(
      <div className="card relative align-center">
        {children}
      </div>
    )
  }
}
