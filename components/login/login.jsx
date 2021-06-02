import React, { useContext, useEffect, useCallback,useRef } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import authReducer from "../state/Auth/reducer";
import AuthContext from "../state/Auth/Context";
import * as authActions from "../state/Auth/actions";
import styles from "./login.module.scss";
import {
    Image, Center, Button
} from "@chakra-ui/react";

function Login() {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    // const formik = useFormik({
    //     initialValues : {
    //         email : '',
    //    	   password : ''
    //     },
    //     validationSchema: yup.object({
    //         email: yup.string()
    //         .required('Você precisa digitar seu email.'),
    //          password: yup.string()
    //         .required('Você precisa digitar sua senha.')
    //     }),
    //     validadeOnChange: false, //valida a acada caractere adicionado
    //     validateOnBlur: false, // valida ao sair do form(ou clicar fora do input)
    // });

    useEffect(()=>{
        console.log(isLoggedIn);
        localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    },[isLoggedIn]);

     const handleLogin = useCallback(()=>{
         setIsLoggedIn(authActions.login);
     },[isLoggedIn,setIsLoggedIn]);

    const handleLogout = useCallback(()=>{
        setIsLoggedIn(authActions.logout);
    },[setIsLoggedIn,setIsLoggedIn]);

    const handleSubmit = useCallback((evt)=>{
        evt.preventDefault();
        console.log(formik.values);
    },[formik])

    const LoginButton = <Button onClick={handleLogin}>Logar</Button>
    const LogoutButton = <Button onClick={handleLogout}>Sair</Button>

    return (
    <div className={styles.container}>
        <Image src={`icons/atividades/atividade1.png`} h="70px" />
        <Center><h1> Entrar </h1></Center>
         <form onSubmit={handleSubmit} className={styles.container}>
            <input className={styles.input} type='email' 
             {...formik.getFieldProps('email')} 
             autoComplete="off"
             placeholder="Digite seu email"/>
             <input type="password"  
             {...formik.getFieldProps('password')} 
             />
             {isLoggedIn ? LogoutButton : LoginButton}
        </form>
    </div>
    )
}

export default Login;