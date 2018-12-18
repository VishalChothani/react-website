import {ACTION_TYPE} from '../../Common/ActionTypes';

export const ProductClicked = (product) => {
  return {
    type: ACTION_TYPE.PRODUCT_SELECTED,
    payload: product,
  };
}
