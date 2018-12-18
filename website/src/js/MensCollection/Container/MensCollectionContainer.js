import React, {Component} from 'react';
import { connect } from 'react-redux';
import CollectionContainer from '../../Collection/Container/CollectionContainer';

class MensCollectionContainer extends Component{
  render(){
    const {
      menData,
    } = this.props;
    return(
      <section className="cateogry-collection">
        <div className="h2 margin-v align-center capitalize">Mens</div>
        <CollectionContainer collectionData={menData} />
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
