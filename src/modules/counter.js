import {
  __,
  dec,
  inc,
  prop,
  not,
  T
} from 'ramda';

export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED';
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED';
export const DECREMENT = 'counter/DECREMENT';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false
};

export function counter(state = initialState, action) {
  const p = prop(__, state);
  switch (prop('type', action)) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: T()
      };

    case INCREMENT:
      return {
        ...state,
        count: inc(p('count')),
        isIncrementing: not(p('isIncrementing'))
      };

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: T()
      };

    case DECREMENT:
      return {
        ...state,
        count: dec(p('count')),
        isDecrementing: not(p('isDecrementing'))
      };

    default:
      return state;
  }
}

export function increment() {
  return function(dispatch) {
    dispatch({
      type: INCREMENT_REQUESTED
    });

    dispatch({
      type: INCREMENT
    });
  }
}

export function incrementAsync() {
  return function(dispatch) {
    dispatch({
      type: INCREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      });
    }, 3000);
  }
}

export function decrement() {
  return function(dispatch) {
    dispatch({
      type: DECREMENT_REQUESTED
    });

    dispatch({
      type: DECREMENT
    });
  }
}

export function decrementAsync() {
  return function(dispatch) {
    dispatch({
      type: DECREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      });
    }, 3000);
  }
}
