import * as types from '../constants/hotels';
import * as services from '../../services/Hotels';

export const getHotels = () => {
  return (dispatch, getState) => {
    dispatch(requestHotels());

    services.getHotels()
      .then((hotels) => {
        dispatch(successHotels(hotels));
      }).catch(() => {
        dispatch(errorHotels());
      });
  };
};

export const requestHotels = () => ({
  type: types.HOTELS_REQUEST,
});

export const successHotels = hotels => ({
  type: types.HOTELS_SUCCESS,
  payload: { hotels },
});

export const errorHotels = () => ({
  type: types.HOTELS_ERROR,
});
