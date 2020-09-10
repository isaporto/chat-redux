import { FETCH_MESSAGES } from '../actions/index';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  if (action.type === FETCH_MESSAGES) {
    return action.payload.messages;
  }
  return state;
}
