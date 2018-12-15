import React, {Component} from 'react';
import { connect } from 'react-redux';
import CollectionComponent from '../Component/CollectionComponent';
import {CONSTANTS} from '../../Common/Constants';

class CollectionContainer extends Component{
  render(){
    const {
      activeHeaderOption,
      menData,
      womenData,
      kidsData,
    } = this.props;
    return(
      <section className="cateogry-collection">
        <div className="h2 margin-v align-center capitalize">{activeHeaderOption}</div>
        { activeHeaderOption === CONSTANTS.pages.men && <CollectionComponent collectionData={menData} /> }
        { activeHeaderOption === CONSTANTS.pages.women && <CollectionComponent collectionData={womenData} /> }
        { activeHeaderOption === CONSTANTS.pages.kids && <CollectionComponent collectionData={kidsData} /> }
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    menData: state.menData,
    womenData: state.womenData,
    kidsData: state.kidsData,
    activeHeaderOption: state.activeHeaderOption,
  }
}

export default connect(mapStateToProps)(CollectionContainer);
