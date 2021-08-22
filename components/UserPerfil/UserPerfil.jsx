import React, { useContext, useEffect, useCallback, useState } from "react";
import Link from "next/link"
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from "axios";
import styles from "./UserPerfil.module.scss";
import UserPc from "./components/UserPc";
import UserMobile from "./components/UserMobile";
import AuthContext from "../state/Auth/Context"
import {
    Image, Center, Button, Input, useToast, Skeleton, Box, Grid, GridItem, VisuallyHidden
} from "@chakra-ui/react";

function Login() {
    const toast = useToast()
    const [user, setUser] = useState([]);
    const usuario = useContext(AuthContext)
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
    const handleLogout = async () => {
        API.logOut()
    }

    async function verificarDados() {
        let id = usuario.uid;
        const res = await axios.get(`http://localhost/api/listar.php?id=3`);
        setUser(res.data.result);
    }

    return (
        <div className={styles.container}>
            <>
                <Center><Image src={`user/user_img/${usuario.photoURL}.webp`} h="100px" /></Center>
                <Center>
                    <p>
                        <Input
                            variant="flushed"
                            type="text"
                            placeholder="Digite sua senha"
                            className={styles.password}
                            isDisabled
                            value={usuario.email}
                            textAlign="center"
                        />
                    </p>
                </Center>
                <div className="mobile-hide">
                    <UserPc handleCopy={handleCopy} />
                </div>
                <div className="mobile">
                    <div className="desktop-hide">
                        <UserMobile handleCopy={handleCopy} />
                    </div>
                    <Button colorScheme="facebook" onClick={handleLogout}>
                        Deslogar
                    </Button>
                </div>
            </>
        </div>
    )
}

export default Login;