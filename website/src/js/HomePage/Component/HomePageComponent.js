import React, {Component} from 'react';
import Header from '../../Header/Container/HeaderContainer';
import Card from '../../Cards/Component/CardComponent';
import HowItWorks from '../../HowItWorks/Containers/HowItWorksContainer';
import Reviews from '../../Reviews/Containers/ReviewsContainer';
import cardImg from '../../../img/card.jpeg';
import './HomePage.scss';

export default class HomePageComponent extends Component{
  render(){
    return (
      <React.Fragment>
        <Header />
        <img alt="" className="heroImg" srcSet="https://addictedtobeauty.com/wp-content/uploads/atb-2017-modeles-trio-photo-sam-stonge.png 2600w, https://addictedtobeauty.com/wp-content/uploads/atb-2017-modeles-trio-photo-sam-stonge-300x200.png 300w, https://addictedtobeauty.com/wp-content/uploads/atb-2017-modeles-trio-photo-sam-stonge-768x512.png 768w, https://addictedtobeauty.com/wp-content/uploads/atb-2017-modeles-trio-photo-sam-stonge-1024x683.png 1024w, https://addictedtobeauty.com/wp-content/uploads/atb-2017-modeles-trio-photo-sam-stonge-400x267.png 400w, https://addictedtobeauty.com/wp-content/uploads/atb-2017-modeles-trio-photo-sam-stonge-500x333.png 500w, https://addictedtobeauty.com/wp-content/uploads/atb-2017-modeles-trio-photo-sam-stonge-900x600.png 900w, https://addictedtobeauty.com/wp-content/uploads/atb-2017-modeles-trio-photo-sam-stonge-555x370.png 555w"></img>
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
