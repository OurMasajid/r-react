import React, { useEffect } from 'react'
import { firebase, auth, firebaseui } from "../../../firebase";
// import { firebaseui } from 'firebaseui'

export default function Login() {

  useEffect(() => {
  //   // Initialize Firebase
  //   firebase.initializeApp(firebaseConfig);

  //   // firebase ui code
    var ui = new firebaseui.auth.AuthUI(auth);
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      //signInSuccessUrl: redirectUrl
      // Other config options...
    });
    return () => {
      // cleanup
    }
  }, [])

  return (
    <div>
      <div id="firebaseui-auth-container"></div>
    </div>
  )
}
