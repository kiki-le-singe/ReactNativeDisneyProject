import * as types from '../constants/cart';

export const addToCart = (hotel) => {
  const { id, price } = hotel;

  return {
    type: types.CART_ADD,
    payload: { hotelId: id, price },
  }
};

export const removeToCart = (hotel) => {
  const { id, price } = hotel;

  return {
    type: types.CART_REMOVE,
    payload: { hotelId: id, price },
  }
};
