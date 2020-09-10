// TODO: add and export your own actions
export const SET_USERNAME = 'SET_USERNAME';
export const SET_CHANNELS = 'SET_CHANNELS';
export const SET_MESSAGES = 'SET_MESSAGES';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SELECT_CHANNEL = 'SELECT_CHANNEL';

// TODO: add and export your own actions
export function setUsername() {
  // eslint-disable-next-line no-alert
  const username = window.prompt("What is your username?");
  return {
    type: SET_USERNAME,
    payload: username,
  };
}

export function setChannels() {
  return {
    type: SET_CHANNELS,
    payload: ['general', 'react', 'paris'],
  };
}

export function selectChannel(channel) {
  return {
    type: SELECT_CHANNEL,
    payload: channel,
  };
}

export function setMessages(channel) {
  debugger
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

  return {
    type: SET_MESSAGES,
    payload: promise,
  };
}

export function sendMessage(messages) {
  return {
    type: SEND_MESSAGE,
    payload: messages,
  };
}
