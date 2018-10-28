import {combineReducers} from 'redux';
import HeaderList from './HeaderReducer';

const IndexReducers = combineReducers({
  headerList: HeaderList,
});

export default IndexReducers;
