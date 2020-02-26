/** @format */

import CartActionTypes from './cart.types.ts';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const delFromCart = (item) => ({
  type: CartActionTypes.DEL_FROM_CART,
  payload: item,
});