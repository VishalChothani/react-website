import React, {Component} from 'react';
import classNames from 'classnames';
import MapLocationComponent from '../../MapLocation/Component/MapLocationComponent';
import configurationService from '../../Common/ConfigurationService';
import './ContactUs.scss';

export default class ContactUsComponent extends Component{
  render(){
    const isInMobile = configurationService.isInMobile();
    return (
      <React.Fragment>
        <MapLocationComponent />
        <div className="contact-us-content">
          <div className="contact-us-address relative width-full">
            { !isInMobile && <span className="contact-us-icon fas fa-map-marker-alt red" /> }
            <div className={classNames('contact-us-info width-full', {'padding-v-sm': isInMobile})}>
              <div class="contact-us-title h3 margin-bot-10 white">Address</div>
              <div class="contact-us-desc h5">Exhibition Rd, Camp,</div> 
              <div class="contact-us-desc h5">Pune, Maharashtra 411001</div>
            </div>
          </div>

          <div className="contact-us-phone relative width-full">
            { !isInMobile && <span className="contact-us-icon fas fa-mobile dark-blue" /> }
            <div className={classNames('contact-us-info width-full', {'padding-v-sm': isInMobile})}>
              <div class="contact-us-title h4 margin-bot-10">Phone</div>
              <div class="contact-us-desc">4086469837</div>
            </div>
          </div>

          <div className="contact-us-email relative width-full">
            { !isInMobile && <span className="contact-us-icon fas fa-envelope bright-green" /> }
            <div className={classNames('contact-us-info width-full', {'padding-v-sm': isInMobile})}>
              <div class="contact-us-title h4 margin-bot-10">Email</div>
              <div class="contact-us-desc">neha@gmail.com</div>
            </div>
          </div>

          {/* TODO(Vishal): FAQ section (Yeti contactus page) */}
        </div>
      </React.Fragment>
    )
  }
}
