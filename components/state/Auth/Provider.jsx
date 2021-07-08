import React, { useReducer } from "react";
import AuthContext from "./Context";
import authReducer from "./reducer";

function Provider({ children }){
    const [isLoggedIn, setIsLoggedIn] = useReducer(authReducer, false)

    return(
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, setIsLoggedIn }}>
    {children}
    </AuthContext.Provider>
    )
}

export default Provider;