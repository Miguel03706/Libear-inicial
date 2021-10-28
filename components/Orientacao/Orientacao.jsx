import React, { useState, useEffect } from "react";
import { Button, Flex, Spacer, Center, Text, SimpleGrid, Box, Skeleton } from "@chakra-ui/react"
import DB from "../../pages/api/MySQL";
import styles from "./orientacao.module.scss";

function Orientacao({ slug }) {
    const [explicacao, setExplicacao] = useState([]);

    useEffect(() => {
        DB.exibirExplicacao(slug).then(setExplicacao);
    }, [])    

    return(
        <>
            {explicacao.map(orientacao => {
                return(
                    <div key={orientacao.id}>
                        <div className={styles.titulo}>
                        <Center><Text>{orientacao.titulo}</Text></Center>    
                        </div>
                        <div className={styles.titulo}>
                        {orientacao.orientacao}    
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Orientacao;