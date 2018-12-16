import React, {Component} from 'react';
import classNames from 'classnames';
import configurationService from '../../Common/ConfigurationService';
import designerImg from '../../../img/designer.jpeg';
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
              <div className="row">
                <div className="col-xs-12 col-sm-6 align-center">
                  <img className="responsive-img" src={designerImg} alt="Neha Chothani" />
                </div>
                <div className={classNames('col-xs-12 col-sm-6 about-us-info', { 'margin-v' : isInMobile })}>
                  <div className="h4 text-justify">
                    A store that caters to the end to end needs of brides with designs those are unique, appealing and dreamy. 
                    We are an exclusive line in the wedding segment offering quirky and eccentric Indo-western and traditional designs in a very contemporary way not just for the bride but the entire family. 
                    NCL collections are very own customised designs in contemporary, classy, elegance while leaving the traditional touch intact. It’s a silhouette created with different fabrics that are truly mind blowing. 
                    We are known for fabulous customising designs with the aesthetic of a dress using colors and embellishments. 
                    Best Known For – Bridal collection, lehengas, ready-to-wear, party wear dresses, Indo-western clothes, lehengas, and suits.
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
