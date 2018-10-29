import React, {Component} from 'react';
import Card from '../../Cards/Component/CardComponent';

export default class HowItWorksComponent extends Component{
  render(){
    return(
      this.props.reviewsData.map((reviewsData) => {
        return (
          <Card key={reviewsData.index}
            src={reviewsData.userImg} 
            alt={reviewsData.alt} 
            comment={reviewsData.comment} 
            reviews={true}
          />
        )
      })
    )
  }
}
