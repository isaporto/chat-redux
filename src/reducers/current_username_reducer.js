import { SET_USERNAME } from '../actions/index';

export default function(state, action) {
  if (state === undefined || state === null) {
    return `anonymous${Math.floor(10 + (Math.random() * 90))}`;
  }
  if (action.type === SET_USERNAME) {
    return action.payload;
  }
  return state;
}
