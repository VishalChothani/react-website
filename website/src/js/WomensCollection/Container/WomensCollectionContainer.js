import React, {Component} from 'react';
import { connect } from 'react-redux';
import CollectionContainer from '../../Collection/Container/CollectionContainer';
import {CONSTANTS} from '../../Common/Constants';

class WomenssCollectionContainer extends Component{
  render(){
    const {
      womenData,
    } = this.props;
    return(
      <section className="cateogry-collection">
        <div className="h2 margin-v align-center capitalize">Women</div>
        <CollectionContainer collectionData={womenData} category={CONSTANTS.pages.women} />
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    womenData: state.womenData,
  }
}

export default connect(mapStateToProps)(WomenssCollectionContainer);
