import React, {Component} from 'react';
import Header from '../../Header/Container/HeaderContainer';
import Carousel from '../../Carousel/Component/CarouselComponent';
import Card from '../../Cards/Component/CardComponent';
import HowItWorks from '../../HowItWorks/Containers/HowItWorksContainer';
import cardImg from '../../../img/card.jpeg';

export default class HomePageComponent extends Component{
  render(){
    return (
      <React.Fragment>
        <Header />
        <div className="hero-carousel">
          <Carousel />
        </div>
        <div className="card-container margin-top">
          <Card alt="card1" src={cardImg} />
          <Card alt="card2" content="Women" src={cardImg} />
          <Card alt="card3" content="Kids" src={cardImg} />
        </div>
        <HowItWorks />
      </React.Fragment>
    )
  }
  
}
