import React, { useEffect, useState } from 'react'
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle'
import { firebase } from "../../firebase/firebase.js";
import userState from '../../states/user';

/**
 * 
 * todo:
 * 1. sign up
 * 2. forgot password
 */

export default function Login(props) {
  const [isSignUp, setIsSignUp] = useState(props.isSignUp || false);
  const [errorMessage, setErrorMessage] = useState();
  

  // window.boot = bootstrap;

  useEffect((props) => {
    const modal = new Modal("#userModal");
    console.log("login component");
    userState.user = firebase.auth().currentUser;
    userState.waitingOnAuth = true;
    firebase.auth().onAuthStateChanged(function (userObj) {
      if (userObj) {
        userState.user = userObj;
        modal.hide();
        console.log("user signed in ", userObj.email);
      } else {
        userState.user = false;
        modal.show();
        console.log("user not logged in!");
      }
      userState.waitingOnAuth = false;
    });
    return () => {
      // cleanup
    }
  }, []);

  const signInUpSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email || !password) {
      setErrorMessage("Enter both email and password");
      return false;
    }
    if (isSignUp) {
      firebaseSignUp(email, password);
    } else {
      firebaseSignIn(email, password);
    }
  }

  const firebaseSignIn = (email, password) => {
    console.log("sign in called");
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      //that.errorCode = error.code;
      setErrorMessage(error.message);
      console.log("userapp error code", error.code);
    });
  }

  const firebaseSignUp = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      //that.errorCode = error.code;
      setErrorMessage(error.message);
      console.log("userapp error code", error.code);
    });
  }
  const firebaseSignOut = () => {
    firebase.auth().signOut();
  }
  const firebaseForgotPasswordLinkSend = (email) => {
    firebase.auth().sendPasswordResetEmail(email).then({
    //email sent
    }).catch({

    })
  }

  return (
    <div>
      {/* 
      buttons for testing
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userModal">Show Model</button>
      <button type="button" className="btn btn-primary" onClick={firebaseSignOut}>sign out</button> */}

      <div className="modal fade" id="userModal" tabIndex="-1" aria-labelledby="userModalTitle" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="userModalTitle">{isSignUp ? "Sign Up" : "Sign In"}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={(e) => signInUpSubmit(e)}>
                <div className="mb-3">
                  <label className="col-form-label">Email address</label>
                  <input type="email" className="form-control" autoComplete="on" name="email"
                    onChange={() => setErrorMessage("")}
                  />
                </div>
                <div className="mb-3">
                  <label className="col-form-label">Password</label>
                  <input type="password" className="form-control" name="password" autoComplete="on"
                    onChange={() => setErrorMessage("")}
                  />
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-primary">{isSignUp ? "Sign Up" : "Sign In"}</button>
                </div>
              </form>
              <div>{errorMessage}</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
