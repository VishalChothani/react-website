import React, {Component} from 'react';
import Card from '../../Cards/Component/CardComponent';
import {Link} from 'react-router-dom';
import './Collection.scss';

import { connect } from 'react-redux';
import { ProductClicked } from '../Actions/CollectionAction';
import { bindActionCreators } from 'redux';

class CollectionContainer extends Component{

  componentWillMount(){
    window.scrollTo(0,0);
  }

  render(){
    const {
      collectionData,
      category,
      ProductClicked,
    } = this.props;
    return(
      <div className="card-container margin-v">
        { 
          collectionData.map((collectionData) => (
            <Card key={collectionData.index}>
              <Link to={"/"+category+"/product/"+collectionData.productId}>
                <img onClick={() => {ProductClicked(collectionData)}} className="responsive-img margin-bot-sm" src={collectionData.productImg} alt={collectionData.alt} />
                <div className="h4 product-title margin-bot align-center">{collectionData.title}</div>
              </Link>
            </Card>
          )) 
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ProductClicked:ProductClicked}, dispatch);
}

export default connect('',mapDispatchToProps)(CollectionContainer);
