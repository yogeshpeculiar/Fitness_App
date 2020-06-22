export {
  updateAxiosToken,
  registerTrainer,
  registerUser,
  login,
  firebaseAuth
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