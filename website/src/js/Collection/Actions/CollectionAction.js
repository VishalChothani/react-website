import {ACTION_TYPE} from '../../Common/ActionTypes';

export const ProductClicked = (product) => {
  return {
    type: ACTION_TYPE.PRODUCT_SELECTED,
    payload: product,
  };
}

export const ProductLoaded = (productId, collections) => {
  const state = collections.filter((product) => {
    if(product.productId === productId){
      return product;
    }
  });
  return {
    type: ACTION_TYPE.PRODUCT_LOADED,
    payload: state[0] ? state[0] : null,
  };
}
