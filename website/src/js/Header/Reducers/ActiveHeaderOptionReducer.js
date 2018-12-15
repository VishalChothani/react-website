import {ACTION_TYPE} from '../../Common/ActionTypes';

export default function(state = 'Home', action){
  switch(action.type){
    case ACTION_TYPE.HEADER_OPTION_SELECTED:
      return action.payload;
    default:
      return state;
  }
}
