import React, {Component} from 'react';
import { connect } from 'react-redux';
import CollectionComponent from '../Component/CollectionComponent';

class CollectionContainer extends Component{
  render(){
    const {
      MenData,
    } = this.props;
    return(
      <section className="cateogry-collection">
        <div className="h2 margin-v align-center">Men</div>
        <CollectionComponent collectionData={MenData} />
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    MenData: state.MenData,
  }
}

export default connect(mapStateToProps)(CollectionContainer);
