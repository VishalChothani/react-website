import React, {Component} from 'react';
import './ContactUs.scss';
import mapImg from '../../../img/map.png';
import {CONSTANTS} from '../../Common/Constants';

export default class ContactUsComponent extends Component{
  render(){
    return (
      <section className="contact-us-section bootstrap-grid">
        <img className="responsive-img contact-us-map desktop" src={mapImg} alt="Map" />
        <div className="contact-us-info absolute bootstrap-grid padding">
          <h1 className="heading align-center relative margin-bot">Get in Touch</h1>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-4 margin-bot">
                <div className="contact-us-address align-center">
                  <span className="contact-us-icon fas fa-map-marker-alt align-center" />
                  <div className="h3 uppercase margin-top-10">Address</div>
                  <div className="h5 margin-top-sm">Exhibition Rd, Camp, Pune, Maharashtra 411001.</div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 margin-bot">
                <div className="contact-us-phone align-center">
                  <span className="contact-us-icon fas fa-mobile align-center" />
                  <div className="h3 uppercase margin-top-10">Phone</div>
                  <div className="h5 margin-top-sm">+91 8928588222</div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-4 margin-bot">
                <div className="contact-us-email align-center">
                  <span className="contact-us-icon fas fa-envelope align-center" />
                  <div className="h3 uppercase margin-top-10">Email</div>
                  <div className="h5 margin-top-sm">nehachothani@gmail.com</div>
                </div>
              </div>

            </div>
          
            <div className="row">
              <div className="col-xs-12 col-sm-offset-2 col-sm-8">
                <div className="social-media-icons margin-top">
                  <a href={CONSTANTS.facebookLink} target="_blank" rel="noopener noreferrer">
                    <span id="contact-facebook" className="fab fa-facebook-square facebook" />
                  </a>
                  <a href={CONSTANTS.instagramLink} target="_blank" rel="noopener noreferrer">
                    <span id="contact-instagram" className="fab fa-instagram instagram" />
                  </a>
                  <a href={CONSTANTS.whatsappLink} target="_blank" rel="noopener noreferrer">
                    <span id="contact-whatsapp" className="fab fa-whatsapp-square whatsapp" />
                  </a>
                  <a href={CONSTANTS.snapchatLink} target="_blank" rel="noopener noreferrer">
                    <span id="contact-snapchat" className="fab fa-snapchat-square snapchat" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
