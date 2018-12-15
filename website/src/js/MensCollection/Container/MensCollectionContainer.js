import React, {Component} from 'react';
import { connect } from 'react-redux';
import CollectionComponent from '../../Collection/Component/CollectionComponent';

class MensCollectionContainer extends Component{
  render(){
    const {
      menData,
    } = this.props;
    return(
      <section className="cateogry-collection">
        <div className="h2 margin-v align-center capitalize">Mens</div>
        <CollectionComponent collectionData={menData} />
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
