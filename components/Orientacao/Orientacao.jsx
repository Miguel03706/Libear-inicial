import React, { useState, useEffect } from "react";
import { Button, Center, Text, AspectRatio } from "@chakra-ui/react"
import DB from "../../pages/api/MySQL";
import styles from "./orientacao.module.scss";

function Orientacao({ slug }) {
    const [explicacao, setExplicacao] = useState([]);

    useEffect(() => {
        DB.exibirExplicacao(slug).then(setExplicacao);
    }, [])

    return (
        <>
            {explicacao.map(orientacao => {
                return (
                    <div key={orientacao.id}>
                        <Center as="h2" fontSize="26px" marginTop="50px" color="#00c3d3"><Text>{orientacao.titulo}</Text></Center>
                      <Center className={styles.video} marginTop="50px">
                                <iframe
                                    title={orientacao.titulo}
                                    src={orientacao.url}
                                    allowFullScreen
                                    height="300px"
                                    width="50%"
                                />
                        </Center>
                        <div className={styles.titulo}>
                            <Center marginTop="50px"><Text>{orientacao.orientacao}</Text></Center>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Orientacao;