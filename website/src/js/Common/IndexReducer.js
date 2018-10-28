import {combineReducers} from 'redux';
import HeaderList from '../Header/Reducers/HeaderReducer';
import HowItWorksData from '../HowItWorks/Reducers/HowItWorksReducer';

const IndexReducers = combineReducers({
  headerList: HeaderList,
  howItWorksData: HowItWorksData
});

export default IndexReducers;
