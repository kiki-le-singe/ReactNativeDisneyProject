import * as types from '../constants/user';
import * as services from '../../services/User';

export const signInUser = (user) => {
  return (dispatch, getState) => {
    dispatch(signInUserRequest());

    services.signInUser(user)
      .then((_user) => {
        dispatch(signInUserSuccess(_user));
      }).catch(() => {
        dispatch(signInUserError());
      });
  };
};

export const signOutUser = () => {
  return (dispatch, getState) => {
    dispatch(signOutUserRequest());

    services.signOutUser()
      .then(() => {
        dispatch(signOutUserSuccess());
      }).catch(() => {
        dispatch(signOutUserError());
      });
  };
};

export const signInUserRequest = () => ({
  type: types.SIGNIN_USER_REQUEST,
});

export const signInUserSuccess = user => ({
  type: types.SIGNIN_USER_SUCCESS,
  payload: user,
});

export const signInUserError = () => ({
  type: types.SIGNIN_USER_ERROR,
});

export const signOutUserRequest = () => ({
  type: types.SIGNOUT_USER_REQUEST,
});

export const signOutUserSuccess = user => ({
  type: types.SIGNOUT_USER_SUCCESS,
  payload: user,
});

export const signOutUserError = () => ({
  type: types.SIGNOUT_USER_ERROR,
});
