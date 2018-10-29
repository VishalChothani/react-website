import React, {Component} from 'react';
import Header from '../../Header/Container/HeaderContainer';
import Carousel from '../../Carousel/Component/CarouselComponent';
import Card from '../../Cards/Component/CardComponent';
import HowItWorks from '../../HowItWorks/Containers/HowItWorksContainer';
import Reviews from '../../Reviews/Containers/ReviewsContainer';
import cardImg from '../../../img/card.jpeg';

export default class HomePageComponent extends Component{
  render(){
    return (
      <React.Fragment>
        <Header />
        <div className="hero-carousel">
          <Carousel />
        </div>
        {/* Maybe move the below cards code into a componenet */}
        <div className="card-container margin-top">
          <Card alt="card1" src={cardImg} />
          <Card alt="card2" content="Women" src={cardImg} />
          <Card alt="card3" content="Kids" src={cardImg} />
        </div>
        <HowItWorks />
        <Reviews />
        
      </React.Fragment>
    )
  }
}
