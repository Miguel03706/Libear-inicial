import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";
import firebaseConfig from "./firebaseConfig";
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import axios from "axios";

if (!firebase.apps.length) {
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  var db = firebaseApp.firestore();
} else {
  const firebaseApp = firebase.app(); // if already initialized, use that one
  var db = firebaseApp.firestore();
}
const user = firebase.auth().currentUser;

const handleError = (error) => {
  if (error.code) {
    switch (error.code) {
      case 'auth/weak-password':
        alert('Senha muito fraca: Sua senha deve conter no minimo 6 caracteres');
        break;
      case 'auth/wrong-password':
        alert('Senha incorreta');
        break
      case 'auth/email-already-in-use':
        alert('Email já está em uso, coloque outro e tente novamente');
        break
      case "auth/invalid-email":
        alert('Insira um email válido!');
        break
      case "auth/requires-recent-login":
        alert('Para realizar essa ação é necessário relogar');
        break
        case "auth/user-not-found":
          alert('Usuário não encontrado, tente usar outro email')
          break
    }
  }
}


export default {
  _firebase: () => { return firebase },
  firebaseUsuario: async () => {
    const res = await firebase.auth().currentUser;
    return res;
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
    }).catch((error) => {
      handleError(error);
    })
  },
  logarContaFB: async (email, senha) => {
    let sucesso = await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
      return firebase.auth().signInWithEmailAndPassword(email, senha);
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

    return docRef.orderBy("id").get().then((querySnapshot) => {
      let img = []
      querySnapshot.forEach((doc) => {
        img.push(doc.data())
      });
      return img;
    })
      .catch((error) => {
        alert(error);
      });
  },
  userUpdate: (email, userName) => {
    const user = firebase.auth().currentUser;
    if (email !== "" && userName !== "") {
      user.updateProfile({
        displayName: userName,
      }).then(() => {
        alert('Nome de usuário alterado com sucesso')
        axios.get(`http://localhost/api/userUpdate.php?id=${user.uid}&user=${userName}`)
      }).catch((error) => {
        alert(error);
      });
      user.updateEmail(email).then(() => {
        alert('Email alterado com sucesso')
      }).catch((error) => {
        handleError(error);
      })
    } else {
      alert('Insira um valor válido')
    }
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
  deletarConta: async () => {
    const user = firebase.auth().currentUser;
    const userKey = Object.keys(window.sessionStorage)
      .filter(it => it.startsWith('firebase:authUser'))[0];
    const usuario = userKey ? JSON.parse(sessionStorage.getItem(userKey)) : undefined;

    user.delete().then(() => {
      axios.get(`http://localhost/api/DeletarConta.php?id=${usuario.uid}`);
      location.href = "http://localhost:3000/entrar"
    }).catch((error) => {
      handleError(error);
    });

  },
}

