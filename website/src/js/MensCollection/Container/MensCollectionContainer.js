import React, {Component} from 'react';
import { connect } from 'react-redux';
// import CollectionContainer from '../../Collection/Container/CollectionContainer';
// import {CONSTANTS} from '../../Common/Constants';
import comingSoon from '../../../img/comingSoon.png';

class MensCollectionContainer extends Component{
  render(){
    // const {
    //   menData,
    // } = this.props;
    return(
      <section className="cateogry-collection bootstrap-grid">
        <div className="h2 margin-v align-center capitalize">Mens</div>
        {/* <CollectionContainer collectionData={menData} category={CONSTANTS.pages.men} /> */}
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
    menData: state.menData,
  }
}

export default connect(mapStateToProps)(MensCollectionContainer);
