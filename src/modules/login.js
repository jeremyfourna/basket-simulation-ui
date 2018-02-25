import {
  __,
  dec,
  inc,
  prop,
  not,
  T
} from 'ramda';

export const LOGIN_REQUESTED = 'login/LOGIN_REQUESTED';
export const USER = 'login/USER';

const initialState = {
  user: {},
  isLogin: false
};

export function login(state = initialState, action) {
  const p = prop(__, state);
  switch (prop('type', action)) {
    case LOGIN_REQUESTED:
      return {
        ...state,
        isLogin: T()
      };

    case USER:
      return {
        ...state,
        count: ,
        isIncrementing: not(p('isIncrementing'))
      };

    default:
      return state;
  }
}

export function requestLogin() {
  return function(dispatch) {
    return dispatch({
      type: LOGIN_REQUESTED
    });
  }
}

export function responseFromAPI(response) {
  return function(dispatch) {
    return dispatch({
      response,
      type: USER
    });
  }
}
