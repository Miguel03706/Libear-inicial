import React, { useReducer, useEffect } from "react";
import authReducer from "./reducer";
import AuthContext from "./Context";

function Provider({ children }){
    const [isLoggedIn, setIsLoggedIn] = useReducer(authReducer, false)
    return(
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
    {children}
    </AuthContext.Provider>
    )
}

export default Provider;