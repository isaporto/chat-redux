import { CREATE_MESSAGE } from '../actions/index';

export default function(state, action) {
  if (state === undefined) {
    return [];
  }

  if (action.type === CREATE_MESSAGE) {
    return action.payload;
  }
  return state;
}
