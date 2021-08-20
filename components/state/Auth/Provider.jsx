import React, { useReducer } from "react";
import AuthContext from "./Context";
import authReducer from "./reducer";

function Provider({ children }){
    const [isLoggedIn, setIsLoggedIn] = useReducer(authReducer, [])

    return(
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
    {children}
    </AuthContext.Provider>
    )
}

export default Provider;