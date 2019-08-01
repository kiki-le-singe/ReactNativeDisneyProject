import * as types from '../constants/cart';

const INITIAL_STATE = {
  hotelIds: [],
  total: 0,
};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.CART_ADD:
      return {
        ...state,
        hotelIds: [...state.hotelIds, payload.hotelId],
        total: state.total + payload.price,
      };
    case types.CART_REMOVE:
      return {
        ...state,
        hotelIds: state.hotelIds.filter(hotelId =>
          hotelId !== payload.hotelId
        ),
        total: state.total - payload.price,
      };
    default:
      return state;
  }
};
