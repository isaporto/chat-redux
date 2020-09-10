// TODO: add and export your own actions
export const SET_USERNAME = 'SET_USERNAME';
export const SET_CHANNELS = 'SET_CHANNELS';
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
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

export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());
  return {
    type: FETCH_MESSAGES,
    payload: promise,
  };
}

export function createMessage(channel, author, content) {
  const body = {
    author,
    content,
    created_at: new Date(Date.now()),
  };
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());
  return {
    type: CREATE_MESSAGE,
    payload: promise,
  };
}
