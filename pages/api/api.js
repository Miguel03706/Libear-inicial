import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";
import firebaseConfig from "./firebaseConfig";
import axios from "axios";


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
      case 'auth/email-already-in-use':
        alert('Email já está em uso, coloque outro e tente novamente');
        break

    }
  }
}

export default {
  _firebase: () => { return firebase },
  firebaseUsuario: async () => {
    return firebase.auth().currentUser;
  },
  criarContaFB: async (email, senha) => {
    let sucesso = await firebase.auth().createUserWithEmailAndPassword(email, senha).then(() => {
      const user = firebase.auth().currentUser;
      axios.get(`http://localhost/api/cadastrar.php?id=${user.uid}`);

      user.updateProfile({
        displayName: "User",
        photoURL: "polar"
      })
    }).then(() => {
      location.href = "http://localhost:3000/entrar"
    }).catch((error)=>{
      handleError(error);
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
  logOut: async () => {
    await firebase.auth().signOut().then(() => {
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
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: userName,
    }).then(() => {
      alert('Nome de usuário alterado com sucesso')
      axios.get(`http://localhost/api/userUpdate.php?id=${user.uid}&user=${userName}`)
    }).catch((error) => {
      console.log(error);
    });
    user.updateEmail(email).then(() => {
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

db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
////////////////////////////////////////////////////

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

