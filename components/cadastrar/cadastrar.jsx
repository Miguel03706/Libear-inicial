import React, { useContext, useEffect, useCallback, useState } from "react";
import Link from "next/link"
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import {
    Image, Center, Button, Input,
} from "@chakra-ui/react";
import API from '../../pages/api/Api'
import styles from "./cadastrar.module.scss";


function Cadastrar() {
    const [result, setResult] = useState([]);
    const router = useRouter();
    const [loading, setLoading] = useState(false);

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
                .min(6, "a senha deve ter no minimo 6 caracteres")
        }),
        validadeOnChange: false, //valida a acada caractere adicionado
        validateOnBlur: false, // valida ao sair do form(ou clicar fora do input)
    });
    useEffect(() => {
        window.localStorage.removeItem("redirect");
    })

    async function cadastrarDados() {
        setLoading(true);
        let {email, password} = formik.values
        await API.criarContaFB(email, password);
        setLoading(false);
    }
   
    const LoginButton = <Button onClick={cadastrarDados} disabled={loading ? true : false} colorScheme="teal">Cadastrar</Button>
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
                <div className={styles.Link} >
                    Já possui uma conta? <Link href="/entrar"><a>Entrar</a></Link>
                </div>
        </div>
    )
}

export default Cadastrar;