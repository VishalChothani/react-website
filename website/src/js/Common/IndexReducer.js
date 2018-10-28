import {combineReducers} from 'redux';
import HeaderList from '../Header/Reducers/HeaderReducer';

const IndexReducers = combineReducers({
  headerList: HeaderList,
});

export default IndexReducers;
