import React, {Component} from 'react';
import { connect } from 'react-redux';
import CollectionComponent from '../../Collection/Component/CollectionComponent';

class WomenssCollectionContainer extends Component{
  render(){
    const {
      womenData,
    } = this.props;
    return(
      <section className="cateogry-collection">
        <div className="h2 margin-v align-center capitalize">Women</div>
        <CollectionComponent collectionData={womenData} />
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
