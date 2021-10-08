import React, { useState, useEffect, useContext, useCallback } from "react"
import DB from "../../pages/api/MySQL";
import AuthContext from "../state/Auth/Context"
import { Text, Flex, Center, Square, Box, Button, Image } from "@chakra-ui/react";
import styles from "./missoes.module.scss"

function Missoes() {
    const usuario = useContext(AuthContext)
    const [missoes, setMissoes] = useState([])
    const [completos, setCompletos] = useState([])

    useEffect(() => {
        DB.exibirMissoes().then(setMissoes)
    }, [])

    const handleFinaliza = useCallback(evt => {
        evt.preventDefault();
        //console.log(id)
    }, [missoes])

    useEffect(async() => {
        await DB.completaMissao(usuario.uid, completos);
        DB.exibirMissoes().then(setMissoes)
    }, [completos])

    return (
        <div className={styles.container}>
            <div className={styles.missoes}>
                {missoes.length <= 0 &&
                    <div className={styles.loading}>
                        <img src="../icons/uteis/loading.gif" alt="carregando" />
                    </div>
                }
                {missoes.map(task => {
                    return (
                            <div key={task.id_missao}>
                                <Flex color="white">
                                    {task.missoes[`${task.id_missao}`].complete == 0 ?
                                        <>
                                            <Center w="30%"  borderBottom="1px solid black">
                                                <Image src={`../images/missoes/${task.img}.webp`} alt={`${task.texto}`} h="100px" w="auto" />
                                            </Center>
                                            <Square bg="blue.500" w="20%" p="5px" borderBottom="1px solid black">
                                                <Button colorScheme="teal" onClick={(e) => setCompletos(task.id_missao)}>Completar</Button>
                                            </Square>
                                            <Center w="50%" bg="green.500" borderBottom="1px solid black">
                                                <Text>{task.texto}</Text>
                                            </Center>
                                        </>
                                        :
                                        <></>
                                    }
                                </Flex>
                            </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Missoes;