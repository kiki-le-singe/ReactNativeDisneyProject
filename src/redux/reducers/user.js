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
    case types.SET_USER:
      return {
        ...this.state,
      };
    case types.SIGNIN_USER_REQUEST:
      return {
        ...this.state,
        loading: true,
        success: false,
        error: false,
      };
    case types.SIGNIN_USER_SUCCESS:
      return {
        ...this.state,
        info: payload._user,
        isConnected: true,
        loading: false,
        success: true,
        error: false,
      };
    case types.SIGNIN_USER_ERROR:
      return {
        ...this.state,
        loading: false,
        success: false,
        error: true,
      };
    case types.logout_USER_REQUEST:
      return {
        ...this.state,
        loading: true,
        success: false,
        error: false,
      };
    case types.logout_USER_SUCCESS:
      return INITIAL_STATE;
    case types.logout_USER_ERROR:
      return {
        ...this.state,
        loading: false,
        success: false,
        error: true,
      };
    default:
      return state;
  }
};

export default userReducer;
