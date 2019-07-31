import * as types from '../constants/hotels';

const INITIAL_STATE = {
  list: [],
  loading: false,
  success: false,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.HOTELS_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    case types.HOTELS_SUCCESS:
      return {
        ...state,
        list: payload.hotels,
        loading: false,
        success: true,
        error: false,
      };
    case types.HOTELS_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    default:
      return state;
  }
};
