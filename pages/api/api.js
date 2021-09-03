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

const user = firebase.auth().currentUser;

const handleError = (error) => {
  if (error.code) {
    switch (error.code) {
      case 'auth/weak-password':
        alert('Senha muito fraca: Sua senha deve conter no minimo 6 caracteres');
        break;
      case 'auth/requires-recent-login':
        alert('Para alterar o email é necessário relogar');
        break;
      case 'auth/wrong-password':
        alert('Senha incorreta');
        break
    }
  }
  console.log("entrei")
}

export default {
  _firebase: () => { return firebase },
  firebaseUsuario: async () => {
    return firebase.auth().currentUser;
  },
  criarContaFB: async (email, senha) => {
    let sucesso = await firebase.auth().createUserWithEmailAndPassword(email, senha).then(() => {
      user.updateProfile({
        displayName: "User",
        photoURL: "abelha"
      })
    }).then(() => {
      location.href = "http://localhost:3000/entrar"
    })
  },
  logarContaFB: async (email, senha) => {
    let sucesso = await firebase.auth().signInWithEmailAndPassword(email, senha).then(() => {
      location.href = "http://localhost:3000/inicio";
    }).catch((error) => {
      handleError(error);
    })
  },
  googleLogar: async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    let result = await firebase.auth().signInWithPopup(provider)

    return result;
  },
  facebookLogar: async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    let result = await firebase.auth().signInWithPopup(provider);
    return result;
  },
  logOut: () => {
    firebase.auth().signOut().then(() => {
      location.href = "http://localhost:3000/entrar"
    })
  },
  userImg: () => {
    var docRef = db.collection("userImg");

    return docRef.get().then((querySnapshot) => {
      let img = []
      querySnapshot.forEach((doc) => {
        img.push(doc.data())
      });
      return img;
    })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  },
  userUpdate: (email, userName) => {
    // const credential = firebase.auth.EmailAuthProvider.credential(
    //   user.email,
    //   user.providerData.providerId
    // );

    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: userName,
    }).then(() => {
      alert('Nome de usuário alterado com sucesso')
    }).catch((error) => {
      console.log(error);
    });
    user.updateEmail(email).then(() => {
      //   user.reauthenticateWithCredential(credential).then(() => {
      //     console.log("Email alterada com sucesso");
      //   }).catch((error) => {
      //     console.log("erro: " + error);
      //   })
      // );
      alert('Email alterado com sucesso')
    }).catch((error) => {
      handleError(error);
    })
  },
  userUpdatePassword: (password) => {
    const credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      password
    );

    user.updatePassword(password).then(() => {
      user.reauthenticateWithCredential(credential).then(() => {
        console.log("senha alterada com sucesso");
      })
    }
    ).catch((error) => {
      handleError(error);
    });
  },
  userUpdateImage: (img) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      photoURL: img
    }).then(() => {
      alert('Imagem alterada com sucesso')
    })
  },
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

