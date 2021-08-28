import React, { useContext, useEffect, useCallback, useState } from "react";
import Link from "next/link"
import { useFormik } from 'formik';
import * as yup from 'yup';
import AuthContext from "../state/Auth/Context";
import axios from "axios";
import styles from "./login.module.scss";
import API from "../../pages/api/Api";
import {
    Image, Center, Button, Input, useToast
} from "@chakra-ui/react";

function Login() {
    const toast = useToast()
    const [result, setResult] = useState([]);

    const usuario = useContext(AuthContext)

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
        validateOnChange: false, //valida a acada caractere adicionado
        validateOnBlur: false, // valida ao sair do form(ou clicar fora do input)
    });
    useEffect(() => {
        let redirect = JSON.parse(localStorage.getItem("redirect"));
        redirect ? toast({ description: "Cadastrado com sucesso" }) : null
        window.localStorage.removeItem("isCreate");
        // usuario !== null ? window.location.href = "/inicio" : null
    }, [])

    useEffect(() => {
       // usuario !== null ? window.location.href = "/inicio" : null
        console.log(usuario);
    }, [usuario])

    const handleLogin = (evt) => {
        evt.preventDefault();
        let { email, password } = formik.values
        API.logarContaFB(email, password)
    };


    const handleGoogle = async () => {
        let result = await API.googleLogar();
    }

    const handleFacebook = async () => {
        let result = await API.facebookLogar();
        if (result) {
            actionLoginFacebook(result.user)
        } else {
            alert('error')
        }
    }

    const handleLogout = async ()=>{
        API.logOut()
    }


    const LoginButton = <Button onClick={handleLogin} colorScheme="teal">Logar</Button>

    return (
        <div className={styles.container}>
            <Center><Image src={`icons/logo_urso_sorrindo.webp`} h="200px" /></Center>
            <Center><h2> Entrar </h2></Center>
            {result.success ? result.encontrei ? null : <Center><small>Email ou senha inválidos {errorEmail()}</small></Center> : null}
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
            {/* <div>
                <Button colorScheme="facebook" onClick={handleGoogle}>
                    Google
                </Button>
                <Button colorScheme="facebook" onClick={handleFacebook}>
                    Facebook
                </Button>
                 <Button colorScheme="facebook" onClick={handleLogout}>
                    Deslogar
                </Button>
            </div> */}
            <div className={styles.Link}>
                Não possui uma conta? <Link href="/cadastrar"><a>Cadastrar</a></Link>
            </div>
        </div>
    )
}

export default Login;