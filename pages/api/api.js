
import React, { useEffect } from "react"
import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";
import firebaseConfig from "./firebaseConfig";

if (!firebase.apps.length) {
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
}else {
  firebase.app(); // if already initialized, use that one
}



export default {
  googleLogar: async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    let result = await firebase.auth().signInWithPopup(provider);
    return result;
  },
  facebookLogar: async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    let result = await firebase.auth().signInWithPopup(provider);
    return result;
  },
  logOut: async () => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
}

/*
///////////////////////////////////////////////////
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
///////////////////////////////////////////////////
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
///////////////////////////////////////////////////

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
///////////////////////////////////////////////////
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
*/

