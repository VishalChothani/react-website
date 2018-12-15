import {ACTION_TYPE} from '../../Common/ActionTypes';
import {CONSTANTS} from '../../Common/Constants';

export default function(state = CONSTANTS.pages.home, action){
  switch(action.type){
    case ACTION_TYPE.HEADER_OPTION_SELECTED:
      return action.payload;
    default:
      return state;
  }
}
