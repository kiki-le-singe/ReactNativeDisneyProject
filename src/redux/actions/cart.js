import * as types from '../constants/cart';

export const addToCart = (hotelId) => ({
  type: types.CART_ADD,
  payload: { hotelId },
});

export const removeToCart = (hotelId) => ({
  type: types.CART_REMOVE,
  payload: { hotelId },
});
