import * as types from '../constants/cart';

const INITIAL_STATE = {
  hotelIds: [],
};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.CART_ADD:
      return {
        ...state,
        hotelIds: [...state.hotelIds, payload.hotelId],
      };
    case types.CART_REMOVE:
      return {
        ...state,
        hotelIds: state.hotelIds.filter(hotelId =>
          hotelId !== payload.hotelId
        ),
      };
    default:
      return state;
  }
};
