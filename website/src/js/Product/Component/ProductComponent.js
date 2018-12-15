import React, {Component} from 'react';
import cardImg from '../../../img/card.jpg';
import './Product.scss';

export default class ProductComponent extends Component{
  render(){
    return(
      <section className="bootstrap-grid product-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-offset-1 col-sm-10">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <img className="responsive-img margin-bot" src={cardImg} alt="card1" />
                </div>
                <div className="col-xs-12 col-sm-6">
                  <h2>Product Name</h2>
                  <h5 className="margin-v">
                    I'm a product detail.
                    I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. 
                    This is also a great space to write what makes this product special and how your customers can benefit from this item.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
