import {ACTION_TYPE} from '../../Common/ActionTypes';

export const SelectHeaderOption = (optionSelected) => {
  return {
    type: ACTION_TYPE.HEADER_OPTION_SELECTED,
    payload: optionSelected,
  };
}
