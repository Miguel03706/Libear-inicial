import React, { useState } from "react";
import AuthContext from "./Context";
import API from '../../../pages/api/Api';
import firebase from "firebase/app";
import "firebase/firebase-auth";

function Provider({ children }){
    const [usuario, setUsuario] = useState(API.firebaseUsuario())
    
    firebase.auth().onAuthStateChanged((user)=>{
        setUsuario(user)
    })
    return(
    <AuthContext.Provider value={usuario}>
    {children}
    </AuthContext.Provider>
    )
}

export default Provider;