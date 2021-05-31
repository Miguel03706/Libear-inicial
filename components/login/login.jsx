import React from "react";
import styles from "./login.module.scss";
import {
    Image, Center
} from "@chakra-ui/react";

function Login() {
    return (
    <div className={styles.container}>
        <Image src={`icons/atividades/atividade1.png`} h="70px" />
        
    </div>
    )
}

export default Login;