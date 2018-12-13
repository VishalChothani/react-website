import {combineReducers} from 'redux';
import HeaderList from '../Header/Reducers/HeaderReducer';
import ActiveHeaderOption from '../Header/Reducers/ActiveHeaderOptionReducer';
import HowItWorksData from '../HowItWorks/Reducers/HowItWorksReducer';
import ReviewsData from '../Reviews/Reducers/ReviewsReducer';
import MenData from '../Collection/Reducer/MenCollectionReducer';

const IndexReducers = combineReducers({
  headerList: HeaderList,
  activeHeaderOption: ActiveHeaderOption,
  howItWorksData: HowItWorksData,
  reviewsData: ReviewsData,
  MenData: MenData,
});

export default IndexReducers;
