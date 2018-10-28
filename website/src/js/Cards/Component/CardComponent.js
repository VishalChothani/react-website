import React, {Component} from 'react';
import './Card.scss';

export default class CardComponent extends Component{
  render(){
    const {
      alt,
      content,
      src,
    } = this.props;

    return(
      <div className="card relative">
        <img className="responsive-img" src={src} alt={alt} />
        <div className="h2 card-content align-center width-full">{content}</div>
      </div>
    )
  }
}
