import { SELECT_CHANNEL } from '../actions/index';

export default function(state, action) {
  if (state === undefined) {
    return 'general';
  }
  if (action.type === SELECT_CHANNEL) {
    return action.payload;
  }
  return state;
}
