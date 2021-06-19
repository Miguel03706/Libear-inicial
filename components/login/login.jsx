import React, { useContext, useEffect, useCallback, useState } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import authReducer from "../state/Auth/reducer";
import AuthContext from "../state/Auth/Context";
import * as authActions from "../state/Auth/actions";
import styles from "./login.module.scss";
import {
    Image, Center, Button, Input, Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
} from "@chakra-ui/react";

function Login() {

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            email: yup.string()
                .required('Você precisa digitar seu email.')
                .email("preencha com um email válido"),
            password: yup.string()
                .required('Você precisa digitar sua senha.')
                .min(8, "a senha deve ter no minimo 8 caracteres")
        }),
        validadeOnChange: false, //valida a acada caractere adicionado
        validateOnBlur: false, // valida ao sair do form(ou clicar fora do input)
    });

    useEffect(() => {
        console.log(isLoggedIn);
        localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    }, [isLoggedIn]);

    const handleLogin = useCallback((evt) => {
        evt.preventDefault();
        console.log(formik.values);
        setIsLoggedIn(authActions.login);
    }, [isLoggedIn, setIsLoggedIn, formik]);

    //const handleLogout = useCallback(() => {
    //    setIsLoggedIn(authActions.logout);
    //}, [setIsLoggedIn, setIsLoggedIn]);
 //const LogoutButton = <Button onClick={handleLogout} colorScheme="teal">Sair</Button>

    const LoginButton = <Button onClick={handleLogin} colorScheme="teal">Logar</Button>

    return (
        <div className={styles.container}>
            <Center><Image src={`icons/logo_urso_sorrindo_logo.webp`} h="200px" /></Center>
            <Center><h2> Entrar </h2></Center>
            {formik.touched.email && formik.errors.email ? (
                <Center>{formik.errors.email}</Center>
            ) : null}
            <form className={styles.form}>
                <Center><p><Input variant="flushed" className={styles.input} type='email'
                    {...formik.getFieldProps('email')}
                    placeholder="Digite seu email"
                    className={styles.email} /></p></Center>
                     {formik.touched.password && formik.errors.password ? (
                <Center>{formik.errors.password}</Center>
            ) : null}
                <Center> <p><Input variant="flushed" type="password"
                    {...formik.getFieldProps('password')}
                    placeholder="Digite sua senha"
                    className={styles.password} 
                    autoComplete="off"/></p></Center>

                <Center> {LoginButton}</Center>
            </form>
        </div>
    )
}

export default Login;