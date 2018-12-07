import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReviewsComponent from '../Component/ReviewsComponent';
import configurationService from '../../Common/ConfigurationService';

class ReviewsContainer extends Component{
  render(){
    const {
      reviewsData,
    } = this.props;
    const isInMobile = configurationService.isInMobile();
    return(
      <section className="reviews align-center padding-v bootstrap-grid">
        <div className="h2 margin-bot">Reviews</div>
        { isInMobile && <ReviewsComponent reviewsData={reviewsData} /> }
        { !isInMobile && 
          <div className="reviews-section card-container margin-bot">
            <div className="container">
              <div className="row">
                <div className="col-sm-offset-2 col-sm-8">
                  <ReviewsComponent reviewsData={reviewsData} />
                </div>
              </div>
            </div>
          </div>
        }
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    reviewsData: state.reviewsData,
  }
}

export default connect(mapStateToProps)(ReviewsContainer);
