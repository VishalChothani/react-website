import {combineReducers} from 'redux';
import HeaderList from '../Header/Reducers/HeaderReducer';
import ActiveHeaderOption from '../Header/Reducers/ActiveHeaderOptionReducer';
import HowItWorksData from '../HowItWorks/Reducers/HowItWorksReducer';
import ReviewsData from '../Reviews/Reducers/ReviewsReducer';
import MenData from '../Collection/Reducer/MenCollectionReducer';
import WomenData from '../Collection/Reducer/WomenCollectionReducer';
import KidsData from '../Collection/Reducer/KidsCollectionReducer';

const IndexReducers = combineReducers({
  headerList: HeaderList,
  activeHeaderOption: ActiveHeaderOption,
  howItWorksData: HowItWorksData,
  reviewsData: ReviewsData,
  menData: MenData,
  womenData: WomenData,
  kidsData: KidsData,
});

export default IndexReducers;
