import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReviewsComponent from '../Component/ReviewsComponent';

class ReviewsContainer extends Component{
  render(){
    const {
      reviewsData,
    } = this.props;
    return(
      <section className="reviews align-center padding-v bootstrap-grid">
        <div className="h2 margin-bot">Reviews</div>
        <div className="reviews-section card-container margin-bot">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-offset-2 col-sm-8">
                <ReviewsComponent reviewsData={reviewsData} />
              </div>
            </div>
          </div>
        </div>
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
