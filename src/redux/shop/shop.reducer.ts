/** @format */

import { ShopActionTypes, ShopActionProps } from './shop.types';

const INITIAL_STATE = {
  collections: null,
};

const shopReducer = (state = INITIAL_STATE, action: ShopActionProps) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
