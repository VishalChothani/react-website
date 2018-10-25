import React, {Component} from 'react';
import classNames from 'classnames';
import configurationService from '../../../js/Common/configurationService';
import './HowItWorks.scss';

export default class HowItWorks extends Component{
  render(){
    const isInMobile = configurationService.isInMobile();
    return(
      <section className={classNames('how-it-works margin-h margin-bot', {'padding' : !isInMobile})}>
        <div className="h2 align-center margin-bot">How It Works</div>
        <div className="how-it-works-section">
          <div className={classNames('how-it-works-content relative', {'margin-bot-sm': isInMobile})}>
            <span className="how-it-works-icon fas fa-calendar-alt"></span>
            <div className="how-it-works-info">
              <div className="how-it-works-title h4 margin-bot-sm">Book an appointment</div>
              <div className="how-it-works-desc">
                Call or msg me to book an appointment on 
                <span className="strong">NUMBER</span>
              </div>
              </div>
          </div>

          <div className={classNames('how-it-works-content relative', {'margin-bot-sm': isInMobile})}>
            <span className="how-it-works-icon fas fa-boxes"></span>
            <div className="how-it-works-info">
              <div className="how-it-works-title h4 margin-bot-sm">Personalization</div>
              <div className="how-it-works-desc">
                Based on your needs, I'll personalization your clothes
              </div>
            </div>
          </div>

          <div className={classNames('how-it-works-content relative', {'margin-bot-sm': isInMobile})}>
            <span className="how-it-works-icon fab fa-studiovinari"></span>
            <div className="how-it-works-info">
              <div className="how-it-works-title h4 margin-bot-sm">Preferences</div>
              <div className="how-it-works-desc">
                Something something Something something
              </div>
            </div>
          </div>
          
          <div className={classNames('how-it-works-content relative', {'margin-bot-sm': isInMobile})}>
            <span className="how-it-works-icon fas fa-tape"></span>
            <div className="how-it-works-info">
              <div className="how-it-works-title h4 margin-bot-sm">Measurement</div>
              <div className="how-it-works-desc">
                Something something Something something
              </div>
            </div>
          </div>

          <div className={classNames('how-it-works-content relative', {'margin-bot-sm': isInMobile})}>
            <span className="how-it-works-icon fas fa-cut"></span>
            <div className="how-it-works-info">
              <div className="how-it-works-title h4 margin-bot-sm">Quick work time</div>
              <div className="how-it-works-desc">
                Something something Something something
              </div>
            </div>
          </div>

          <div className={classNames('how-it-works-content relative', {'margin-bot-sm': isInMobile})}>
            <span className="how-it-works-icon fas fa-smile-beam"></span>
            <div className="how-it-works-info">
              <div className="how-it-works-title h4 margin-bot-sm">Guaranteed fit</div>
              <div className="how-it-works-desc">
                If it's not a perfect fit, we'll alter or remake it.
              </div>
            </div>
          </div>

        </div>
      </section>
    )
  }
}



