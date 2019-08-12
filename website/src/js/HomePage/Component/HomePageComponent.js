import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Card from '../../Cards/Component/CardComponent';
import HowItWorks from '../../HowItWorks/Containers/HowItWorksContainer';
import Reviews from '../../Reviews/Containers/ReviewsContainer';
import {CONSTANTS} from '../../Common/Constants';
import cardImg from '../../../img/card.jpg';
import coverImg from '../../../img/cover.jpg';
import './HomePage.scss';

export default class HomePageComponent extends Component{
  render(){
    
    return (
      <React.Fragment>
        
        {/* <picture>
          <source srcSet="https://lsco.scene7.com/is/image/lsco/A2_TruckerJacket_Desktop?$ZF$&amp;wid=3072" media="(min-width: 1440px)" /> 
          <source srcSet="https://lsco.scene7.com/is/image/lsco/A2_TruckerJacket_Desktop?$ZF$&amp;wid=1440" media="(min-width: 1024px)" /> 
          <source srcSet="https://lsco.scene7.com/is/image/lsco/A2_TruckerJacket_Desktop?$ZF$&amp;wid=1229" media="(min-width: 640px)" /> 
          <source srcSet="https://lsco3.scene7.com/is/image/lsco/A2_TruckerJacket_Mobile?$ZF$&amp;wid=640" media="(min-width: 320px)" /> 
          <img className="heroImg" src="https://lsco.scene7.com/is/image/lsco/A2_TruckerJacket_Desktop?$ZF$&amp;wid=1440" alt="TRUCKER JACKETS" />
        </picture> */}

        <img className="heroImg" src={coverImg} alt="Cover img" />

        {/* Maybe move the below cards code into a componenet */}
        <div className="card-container margin-v">
          <Card attention={true}>
            <Link to={CONSTANTS.pages.men}>
              <img className="responsive-img" src={cardImg} alt="card1" />
              <div className="h2 card-content align-center width-full">Men</div>
            </Link>
          </Card>
          
          <Card attention={true}>
            <Link to={CONSTANTS.pages.women}>
              <img className="responsive-img" src={cardImg} alt="card2" />
              <div className="h2 card-content align-center width-full">Women</div>
            </Link>
          </Card>
          
          <Card attention={true}>
            <Link to={CONSTANTS.pages.kids}>
              <img className="responsive-img" src={cardImg} alt="card3" />
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
