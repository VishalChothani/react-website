import React, {Component} from 'react';
import classNames from 'classnames';
import configurationService from '../../Common/ConfigurationService';
import './how-it-works.scss';

export default class HowItWorksComponent extends Component{
  render(){
    const isInMobile = configurationService.isInMobile();
    
    return(
      this.props.howItWorksData.map((howItWorksData) => {
        return (
          <div key={howItWorksData.title} className={classNames('how-it-works-content relative', {'margin-bot-sm': isInMobile})}>
            <span className={classNames('how-it-works-icon fab', howItWorksData.icon)}></span>
            <div className="how-it-works-info">
              <div className="how-it-works-title h4 margin-bot-sm">{howItWorksData.title}</div>
              <div className="how-it-works-desc">
                {howItWorksData.desc}
              </div>
            </div>
          </div>
        )
      })
    )
  }
}
