import React, {Component} from 'react';
import { connect } from 'react-redux';
import CollectionContainer from '../../Collection/Container/CollectionContainer';
import {CONSTANTS} from '../../Common/Constants';

class KidsCollectionContainer extends Component{
  render(){
    const {
      kidsData,
    } = this.props;
    return(
      <section className="cateogry-collection">
        <div className="h2 margin-v align-center capitalize">Kids</div>
        <CollectionContainer collectionData={kidsData} category={CONSTANTS.pages.kids} />
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    kidsData: state.kidsData,
  }
}

export default connect(mapStateToProps)(KidsCollectionContainer);
