import { SEND_MESSAGE, SET_MESSAGES } from '../actions/index';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  if (action.type === SET_MESSAGES) {
    return action.payload;
  }

  if (action.type === SEND_MESSAGE) {
    return action.payload;
  }
  return state;
}
