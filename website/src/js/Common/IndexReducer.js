import {combineReducers} from 'redux';
import HeaderList from '../Header/Reducers/HeaderReducer';
import ActiveHeaderOption from '../Header/Reducers/ActiveHeaderOptionReducer';
import HowItWorksData from '../HowItWorks/Reducers/HowItWorksReducer';
import ReviewsData from '../Reviews/Reducers/ReviewsReducer';
import MenData from '../MensCollection/Reducer/MenCollectionReducer';
import WomenData from '../WomensCollection/Reducer/WomenCollectionReducer';
import KidsData from '../KidsCollection/Reducer/KidsCollectionReducer';
import ProductInfo from '../Collection/Reducer/CollectionReducer';

const IndexReducers = combineReducers({
  headerList: HeaderList,
  activeHeaderOption: ActiveHeaderOption,
  howItWorksData: HowItWorksData,
  reviewsData: ReviewsData,
  menData: MenData,
  womenData: WomenData,
  kidsData: KidsData,
  productInfo: ProductInfo,
});

export default IndexReducers;
