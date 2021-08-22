import { createContext } from "react";
import authReducer from "./reducer";
import Provider from './Provider'
import API from "../../../pages/api/Api"



const Context = createContext(API.firebaseUsuario());

export default Context;