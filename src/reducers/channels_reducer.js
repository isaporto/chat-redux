import { SET_CHANNELS } from '../actions/index';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  if (action.type === SET_CHANNELS) {
    return action.payload;
  }
  return state;
}
