import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Card from '../../Cards/Component/CardComponent';
import HowItWorks from '../../HowItWorks/Containers/HowItWorksContainer';
import Reviews from '../../Reviews/Containers/ReviewsContainer';
import {CONSTANTS} from '../../Common/Constants';
import cardImg from '../../../img/card.jpg';
import coverImgDesktop from '../../../img/coverImgDesktop.jpg';
import coverImgMobile from '../../../img/coverImgMobile.jpg';
import './HomePage.scss';

export default class HomePageComponent extends Component{
  render(){
    
    return (
      <React.Fragment>
        
        <img className="heroImg mobile" src={coverImgMobile} alt="Cover img mobile" />
        <img className="heroImg desktop" src={coverImgDesktop} alt="Cover img desktop" />

        {/* Maybe move the below cards code into a componenet */}
        <div className="card-container margin-v">
          <Card attention={true}>
            <Link to={"/"+CONSTANTS.pages.men}>
              <img  id="card-men" className="responsive-img" src={cardImg} alt="card1" />
              <div className="h2 card-content align-center width-full">Men</div>
            </Link>
          </Card>
          
          <Card attention={true}>
            <Link to={"/"+CONSTANTS.pages.women}>
              <img  id="card-women" className="responsive-img" src={cardImg} alt="card2" />
              <div className="h2 card-content align-center width-full">Women</div>
            </Link>
          </Card>
          
          <Card attention={true}>
            <Link to={"/"+CONSTANTS.pages.kids}>
              <img id="card-kids" className="responsive-img" src={cardImg} alt="card3" />
              <div className="h2 card-content align-center width-full">Kids</div>
            </Link>
          </Card>

        </div>
        <HowItWorks />
        <Reviews />
      </React.Fragment>
    )
  }
}
