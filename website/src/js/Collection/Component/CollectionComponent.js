import React, {Component} from 'react';
import Card from '../../Cards/Component/CardComponent';
import './Collection.scss';

export default class CollectionComponent extends Component{
  render(){
    const {
      collectionData,
    } = this.props;
    return(
      <div className="card-container margin-v">
        { 
          collectionData.map((collectionData) => (
            <Card key={collectionData.index}>
              <img className="responsive-img margin-bot-sm" src={collectionData.productImg} alt={collectionData.alt} />
              <div className="h4 product-title margin-bot align-center">{collectionData.title}</div>
            </Card>
          )) 
        }
      </div>
    )
  }
}
