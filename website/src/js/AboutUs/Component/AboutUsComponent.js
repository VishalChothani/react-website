import React, {Component} from 'react';
import classNames from 'classnames';
import configurationService from '../../Common/ConfigurationService';
import designerImg from '../../../img/neha.jpeg';
import './AboutUs.scss';

export default class AboutUsComponent extends Component{
  render(){
    const isInMobile = configurationService.isInMobile();
    return(
      <section className="bootstrap-grid about-us-container">
        <h1 className="margin-bot align-center">Neha Chothani Label</h1>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-offset-1 col-sm-10">
              <div className="row card-container">
                <div className="col-xs-12 col-sm-6 align-center">
                  <img className="responsive-img" src={designerImg} alt="Neha Chothani" />
                </div>
                <div className={classNames('col-xs-12 col-sm-6 about-us-info', { 'margin-v' : isInMobile })}>
                  <div className="h5">
                    A store that caters to the end-to-end needs of brides with designs that are unique, appealing and dreamy. We are an exclusive line in the wedding segment offering modern, quirky and eccentric indo-western and traditional designs not just for the bride, but for the entire family. Neha Chothani Label collections encompass contemporary and classy elegance while maintaining a traditional touch. We specialize in bridal collections, lehengas, ready-to-wear garments, party-wear dresses, indo-western attire and suits. Every design is tailored specifically to each customer using color, embellishments and fabrics that are truly mind-blowing. 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
