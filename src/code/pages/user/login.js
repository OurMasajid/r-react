import React, { useEffect, useState } from 'react'
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle'
import { firebase } from "../../../firebase";
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
        // if (props.callBack) {
        //   props.callBack();
        // }
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
    // if (firebase.auth().currentUser) {
    //   firebase.auth().signOut();

    // }
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
      {/* <button type="button" data-bs-toggle="modal" data-bs-target="#signInModal">Launch modal</button>
      <div class="modal fade" id="signInModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog " role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{isSignUp?"Sign Up":"Sign In"}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form onSubmit={(e) => signInSubmit(e)}>
                <div class="form-group">
                  <label>Email address</label>
                  <input type="email" class="form-control" autocomplete="on" name="email" />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input type="password" class="form-control" name="password" autocomplete="on" />
                </div>
                <button type="submit" class="btn btn-primary" >Submit</button>
              </form>
              <div>{errorMessage}</div>
            </div>
          </div>
        </div>
      </div> */}

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userModal">Show Model</button>
      <button type="button" class="btn btn-primary" onClick={firebaseSignOut}>sign out</button>

      <div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="userModalTitle" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="userModalTitle">{isSignUp ? "Sign Up" : "Sign In"}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form onSubmit={(e) => signInUpSubmit(e)}>
                <div class="mb-3">
                  <label class="col-form-label">Email address</label>
                  <input type="email" class="form-control" autocomplete="on" name="email"
                    onChange={() => setErrorMessage("")}
                  />
                </div>
                <div class="mb-3">
                  <label class="col-form-label">Password</label>
                  <input type="password" class="form-control" name="password" autocomplete="on"
                    onChange={() => setErrorMessage("")}
                  />
                </div>
                <div class="mb-3">
                  <button type="submit" class="btn btn-primary">{isSignUp ? "Sign Up" : "Sign In"}</button>
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
