export {
  updateAxiosToken,
  registerTrainer,
  registerUser,
  login,
  firebaseTrainerAuth,
  firebaseUserAuth
} from './auth';

export {
  attemptGoogleAuth,
  registerWithEmail,
  signInWithEmail
} from './firebaseMethods';

export {
  listTrainers,
  addTrainerDetails,
  getUserInfo
} from './user';

export {
  uploadImage
} from './storage';

export {
  makeCall
} from './call';