import { createContext } from "react";
import API from "../../../pages/api/Api"

const Context = createContext(API.firebaseUsuario());

export default Context;