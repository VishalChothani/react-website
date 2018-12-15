import React, {Component} from 'react';
import { connect } from 'react-redux';
import CollectionComponent from '../../Collection/Component/CollectionComponent';

class KidsCollectionContainer extends Component{
  render(){
    const {
      kidsData,
    } = this.props;
    return(
      <section className="cateogry-collection">
        <div className="h2 margin-v align-center capitalize">Kids</div>
        <CollectionComponent collectionData={kidsData} />
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
