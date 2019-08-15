import React, {Component} from 'react';
import { connect } from 'react-redux';
import HowItWorksComponent from '../Component/HowItWorksComponent';
import {CONSTANTS} from '../../Common/Constants';
import { Link } from 'react-router-dom';

class HowItWorksContainer extends Component{
  render(){
    const {
      howItWorksData,
    } = this.props;
    return(
      <section className="how-it-works padding bg-white">
        <div className="h2 align-center margin-bot relative">How It Works</div>
        <div className="how-it-works-section padding-top">
          <HowItWorksComponent howItWorksData={howItWorksData} />
        </div>
        {/* TODO: Make a button component */}
        <div className="margin-v align-center">
          <Link to={"/"+CONSTANTS.pages.contact} id="how-to-contact" className="button h4"> Contact Us Now</Link>
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
