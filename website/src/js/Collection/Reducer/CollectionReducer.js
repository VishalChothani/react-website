import {ACTION_TYPE} from '../../Common/ActionTypes';

export default function(state = '', action){
  switch(action.type){
    case ACTION_TYPE.PRODUCT_SELECTED:
      return action.payload;

    case ACTION_TYPE.PRODUCT_LOADED:
      return action.payload;
    default:
      return state;
  }
}
