import React, { useContext, useEffect, useCallback, useState } from "react";
import styles from "./UserPerfil.module.scss";
import UserPc from "./components/UserPc";
import UserMobile from "./components/UserMobile";
import AuthContext from "../state/Auth/Context"
import {
    Image, Center, Button, Input, useToast, Skeleton, Box, Grid, GridItem, VisuallyHidden
} from "@chakra-ui/react";
import UserRanking from "../UserRanking";

function UserPerfil() {
    const toast = useToast()
    const usuario = useContext(AuthContext)

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

    return (
        <div className={styles.container}>
            <>
                <Center><Image src={`user/user_img/${usuario.photoURL}.webp`} h="100px" /></Center>
                <Center>

                    <Input
                        variant="flushed"
                        w="auto"
                        type="text"
                        placeholder="Digite sua senha"
                        className={styles.password}
                        isDisabled
                        value={usuario.email}
                        textAlign="center"
                    />

                </Center>
                <Center p="10px">
                    <UserRanking />
                </Center>

                <div className="mobile-hide">
                    <UserPc handleCopy={handleCopy} />
                </div>
                <div className="mobile">
                    <div className="desktop-hide">
                        <UserMobile handleCopy={handleCopy} />
                    </div>
                </div>
            </>
        </div>
    )
}

export default UserPerfil;