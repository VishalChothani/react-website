import React, {Component} from 'react';
import classNames from 'classnames';
import './Card.scss';

export default class CardComponent extends Component{
  render(){
    const {
      children,
      attention,
    } = this.props;

    return(
      <div className={classNames('card relative align-center pointer', {'card-animation': attention})}>
        {children}
      </div>
    )
  }
}
