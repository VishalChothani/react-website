import {combineReducers} from 'redux';
import HeaderList from '../Header/Reducers/HeaderReducer';
import HowItWorksData from '../HowItWorks/Reducers/HowItWorksReducer';
import ReviewsData from '../Reviews/Reducers/ReviewsReducer';

const IndexReducers = combineReducers({
  headerList: HeaderList,
  howItWorksData: HowItWorksData,
  reviewsData: ReviewsData,
});

export default IndexReducers;
