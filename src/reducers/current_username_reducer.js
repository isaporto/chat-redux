import SEND_MESSAGE from '../actions/index';

export default function(state, action) {
  if (state === undefined || state === null) {
    return `anonymous${Math.floor(10 + (Math.random() * 90))}`;
  }
  if (action.type === SEND_MESSAGE) {
    return action.payload;
  }
  return state;
}
