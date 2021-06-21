import React, { useContext, useEffect, useCallback, useState } from "react";
import Link from "next/link"
import { useFormik } from 'formik';
import * as yup from 'yup';
import AuthContext from "../state/Auth/Context";
import * as authActions from "../state/Auth/actions";
import axios from "axios";
import {
    Image, Center, Button, Input,
} from "@chakra-ui/react";
import styles from "./cadastrar.module.scss";

function Cadastrar() {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const [result, setResult] = useState([]);

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
        localStorage.setItem("redirect", JSON.stringify(false));
        window.localStorage.removeItem("id_user");
    },[])
    useEffect(() => {
        localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
        isLoggedIn ? cadastrarDados() : null
    }, [isLoggedIn]);

    useEffect(() => {
        result.success ? window.location.href = "http://localhost:3000/entrar" : null 
        result.success ? localStorage.setItem("redirect", JSON.stringify(true)) : null 
    }, [result]);

    const handleLogin = useCallback((evt) => {
        evt.preventDefault();
        setIsLoggedIn(authActions.login);
    }, [setIsLoggedIn]);

    function errorEmail() {
        setIsLoggedIn(authActions.logout);
    }

    async function cadastrarDados() {
        const res = await axios.get(`http://localhost/api/cadastrar.php?email=${formik.values.email}&password=${formik.values.password}`);
        setResult(res.data);
    }
   
    const LoginButton = <Button onClick={handleLogin} colorScheme="teal">Cadastrar</Button>
    return (
        <div className={styles.container}>
            <Center><Image src={`icons/logo_urso.webp`} h="200px" /></Center>
            <Center><h2> Cadastrar </h2></Center>
            {result.encontrei ? <Center><small>Email já está em uso {errorEmail()}</small></Center> : null}
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
                    autoComplete="off" /></p></Center>
                <Center> {LoginButton}</Center>
            </form>
                <div className={styles.Link}>
                    Já possui uma conta? <Link href="/entrar"><a>Entrar</a></Link>
                </div>
        </div>
    )
}

export default Cadastrar;