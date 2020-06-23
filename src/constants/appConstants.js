export const rootURL = 'https://te-gym-api.herokuapp.com';
// export const rootURL = 'http://192.168.31.125:3001';
export const userTypes = {
  USER: 'USER',
  TRAINER: 'TRAINER'
}
export const CHANNELS = {
  STORE_CLIENT_INFO: 'STORE_CLIENT_INFO',
  CHECK_USER_ONLINE: 'CHECK_USER_ONLINE',
  INITIATE_VIDEO_CALL: 'INITIATE_VIDEO_CALL',
  CONFIRM_VIDEO_CALL: 'CONFIRM_VIDEO_CALL'
}

export const videoFeedConfig = {
  width: 360,
  height: 640,
  bitrate: 600,
  FPS: 30
}
export const webClientId = '284208119571-nt9fitb9l2o4qulefvju8gqeo7aaug01.apps.googleusercontent.com';

export const videoTestMode = false;
export const callTimeout = 30000; //30 secs
