import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";
import firebaseConfig from "./firebaseConfig";

if (!firebase.apps.length) {
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  var db = firebaseApp.firestore();
} else {
  const firebaseApp = firebase.app(); // if already initialized, use that one
  var db = firebaseApp.firestore();
}
//const db = firebaseApp.firestore();


export default {
  _firebase: () => { return firebase },
  firebaseUsuario: async () => {
    return firebase.auth().currentUser;
  },
  criarContaFB: async (email, senha) => {
    let sucesso = await firebase.auth().createUserWithEmailAndPassword(email, senha).then(() => {
      localStorage.setItem("isCreate", true)
      const user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: "User",
        photoURL: "abelha"
      })
    })
  },
  logarContaFB: async (email, senha) => {
    let sucesso = await firebase.auth().signInWithEmailAndPassword(email, senha).then(() => {
      localStorage.setItem("isLogged", true)
    })
  },
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
    firebase.auth().signOut()
  },
  userImg: () => {
    var docRef = db.collection("userImg");

    return docRef.get().then((querySnapshot) => {
      let img = []
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          img.push(doc.data())
          //console.log(doc.id, " => ", doc.data());
      });
      return img;
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
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

