import React, {Component} from 'react';
import './card.scss';

export default class CardComponent extends Component{
  render(){
    const {
      alt,
      content,
      src,
      comment,
      reviews,
    } = this.props;

    return(
      <div className="card relative">
      { reviews &&
        <React.Fragment>
          <img className="review-img responsive-img margin-bot-sm" src={src} alt={alt} />
          <div className="review-comment">{comment}</div>
        </React.Fragment>
      }
      { !reviews &&
        <React.Fragment>
          <img className="responsive-img" src={src} alt={alt} />
          <div className="h2 card-content align-center width-full">{content}</div>
        </React.Fragment>
      }
      </div>
    )
  }
}
