import {combineReducers} from 'redux';
import HeaderList from '../Header/Reducers/HeaderReducer';
import HowItWorksData from '../HowItWorks/Reducers/HowItWorksReducer';
import ReviewsData from '../Reviews/Reducers/ReviewsReducer';
import MenData from '../Collection/Reducer/MenReducer';

const IndexReducers = combineReducers({
  headerList: HeaderList,
  howItWorksData: HowItWorksData,
  reviewsData: ReviewsData,
  MenData: MenData,
});

export default IndexReducers;
