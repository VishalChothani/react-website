import React, {Component} from 'react';
import Carousel from '../../Carousel/Component/CarouselComponent';
import './Review.scss';

export default class ReviewsComponent extends Component{
  render(){
    const {
      reviewsData,
    } = this.props;
    return(
      <Carousel>
        { 
          reviewsData.map((reviewsData) => (
            <div key={reviewsData.index}>
              <img className="review-img responsive-img margin-bot-sm" src={reviewsData.userImg} alt={reviewsData.alt} />
              <div className="review-comment margin-h align-center">{reviewsData.comment}</div>
            </div>
          )) 
        }
      </Carousel>
    )
  }
}
