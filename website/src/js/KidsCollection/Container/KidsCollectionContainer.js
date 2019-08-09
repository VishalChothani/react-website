import React, {Component} from 'react';
import { connect } from 'react-redux';
// import CollectionContainer from '../../Collection/Container/CollectionContainer';
// import {CONSTANTS} from '../../Common/Constants';
import comingSoon from '../../../img/comingSoon.png';

class KidsCollectionContainer extends Component{
  render(){
    // const {
    //   kidsData,
    // } = this.props;
    return(
      <section className="cateogry-collection">
        <div className="h2 margin-v align-center capitalize">Kids</div>
        {/* <CollectionContainer collectionData={kidsData} category={CONSTANTS.pages.kids} /> */}
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8">
              <img className="width-full" src={comingSoon} />
            </div>
          </div>
        </div>
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
