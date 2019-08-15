import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Card from '../../Cards/Component/CardComponent';
import HowItWorks from '../../HowItWorks/Containers/HowItWorksContainer';
import Reviews from '../../Reviews/Containers/ReviewsContainer';
import {CONSTANTS} from '../../Common/Constants';
import kidsImg from '../../../img/kids.jpg';
import menImg from '../../../img/men.jpg';
import womenImg from '../../../img/women.jpg';
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
              <img  id="card-men" className="responsive-img" src={menImg} alt="card1" />
              <div className="h2 card-content align-center width-full">Men</div>
            </Link>
            <div class="margin-v align-center">
              <Link to={"/"+CONSTANTS.pages.men} class="button h4"> 
                <span id="view-men">View</span>
              </Link>
            </div>
          </Card>
          
          <Card attention={true}>
            <Link to={"/"+CONSTANTS.pages.women}>
              <img  id="card-women" className="responsive-img" src={womenImg} alt="card2" />
              <div className="h2 card-content align-center width-full">Women</div>
            </Link>
            <div class="margin-v align-center">
              <Link to={"/"+CONSTANTS.pages.women} class="button h4"> 
                <span id="view-women">View</span>
              </Link>
            </div>
          </Card>
          
          <Card attention={true}>
            <Link to={"/"+CONSTANTS.pages.kids}>
              <img id="card-kids" className="responsive-img" src={kidsImg} alt="card3" />
              <div className="h2 card-content align-center width-full">Kids</div>
            </Link>
            <div class="margin-v align-center">
              <Link to={"/"+CONSTANTS.pages.kids} class="button h4"> 
                <span id="view-kids">View</span>
              </Link>
            </div>
          </Card>

        </div>
        <HowItWorks />
        <Reviews />
      </React.Fragment>
    )
  }
}
