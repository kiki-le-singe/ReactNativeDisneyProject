import * as types from '../constants/user';

const INITIAL_STATE = {
  info: null,
  isConnected: false,
  loading: false,
  success: false,
  error: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.SIGNIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    case types.SIGNIN_USER_SUCCESS:
      return {
        ...state,
        info: payload,
        isConnected: true,
        loading: false,
        success: true,
        error: false,
      };
    case types.SIGNIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    case types.SIGNOUT_USER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    case types.SIGNOUT_USER_SUCCESS:
      return {
        ...INITIAL_STATE,
        success: true,
      };
    case types.SIGNOUT_USER_ERROR:
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

export default userReducer;
