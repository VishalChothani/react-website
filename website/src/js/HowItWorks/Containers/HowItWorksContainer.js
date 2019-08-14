import React, {Component} from 'react';
import classNames from 'classnames';
import configurationService from '../../Common/ConfigurationService';
import { connect } from 'react-redux';
import HowItWorksComponent from '../Component/HowItWorksComponent';

class HowItWorksContainer extends Component{
  render(){
    const isInMobile = configurationService.isInMobile();
    const {
      howItWorksData,
    } = this.props;
    return(
      <section className={classNames('how-it-works margin-h', {'padding' : !isInMobile})}>
        <div className="h2 align-center margin-bot relative heading heading-black">How It Works</div>
        <div className="how-it-works-section padding-top">
          <HowItWorksComponent howItWorksData={howItWorksData} />
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    howItWorksData: state.howItWorksData,
  }
}

export default connect(mapStateToProps)(HowItWorksContainer);
