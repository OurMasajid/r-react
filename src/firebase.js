import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
}

//window.config = config; // for testing

firebase.initializeApp(config);

// function authChange() {
//   firebase.auth().onAuthStateChanged(function (userObj) {
//     if (userObj) {
//       userState.user = userObj;
//     }
//     else {
//       userState.user = false;
//     }
//   })
// };

export { firebase }