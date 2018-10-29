import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReviewsComponent from '../Component/ReviewsComponent';

class ReviewsContainer extends Component{
  render(){
    const {
      reviewsData,
    } = this.props;
    return(
      <section className="reviews align-center">
        <div className="h2 margin-bot">Reviews</div>
        <div className="reviews-section card-container">
          <ReviewsComponent reviewsData={reviewsData} />
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
