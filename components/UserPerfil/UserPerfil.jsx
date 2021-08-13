import React, { useContext, useEffect, useCallback, useState } from "react";
import Link from "next/link"
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from "axios";
import styles from "./UserPerfil.module.scss";
import UserPc from "./components/UserPc";
import UserMobile from "./components/UserMobile";
import {
    Image, Center, Button, Input, useToast, Skeleton, Box, Grid, GridItem, VisuallyHidden
} from "@chakra-ui/react";

function Login() {
    const toast = useToast()
    const [user, setUser] = useState([]);
    useEffect(() => {
        verificarDados()
    }, []);

    const handleCopy = useCallback((evt) => {
        evt.preventDefault();
        let textArea = document.querySelector('.text');
        textArea.select();
        document.execCommand('copy');
        toast({
            description: "Copiado para a área de transferência",
            status: "success",
            duration: 3000,
        })
    }, []);

    async function verificarDados() {
        let id = JSON.parse(localStorage.getItem("id_user"));
        const res = await axios.get(`http://localhost/api/listar.php?id=${id}`);
        setUser(res.data.result);
    }

    return (
        <div className={styles.container}>
            {user.map(usuario => {
                return (
                    <>
                        <Center><Image src={`user/user_img/${usuario.img}.webp`} h="100px" /></Center>
                        <Center>
                            <p>
                                <Input variant="flushed" type="text"
                                    placeholder="Digite sua senha"
                                    className={styles.password}
                                    isDisabled
                                    value={usuario.user}
                                    textAlign="center"
                                />
                            </p>
                        </Center>
                        <div className="mobile-hide">
                       <UserPc handleCopy={handleCopy}/>
                        </div>

                        <div className="mobile">
                            <div className="desktop-hide">
                            <UserMobile handleCopy={handleCopy}/>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Login;