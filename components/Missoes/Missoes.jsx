import React, { useState, useEffect, useContext, useCallback } from "react"
import DB from "../../pages/api/MySQL";
import AuthContext from "../state/Auth/Context"
import { Text, Flex, Center, Square, Box, Button } from "@chakra-ui/react";
import styles from "./missoes.module.scss"

function Missoes() {
    const usuario = useContext(AuthContext)
    const [missoes, setMissoes] = useState([])
    const [completos, setCompletos] = useState([])

    useEffect(() => {
        DB.exibirMissoes(usuario.uid).then(setMissoes)
    }, [])

    const handleFinaliza = useCallback(evt => {
        evt.preventDefault();
        console.log(id)
    }, [missoes])

    useEffect(() => {
        
        DB.CompletaMissao(usuario.uid, completos);
    }, [completos])


    useEffect(() => {
        console.log(missoes)
    }, [missoes])
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
                        <>
                            <div key={task.id_missao}>
                                <Flex color="white" borderBottom="1px solid black">
                                    {task.missoes[`${task.id_missao}`].complete == 0 ?
                                        <>
                                            <Center w="30%" bg="green.500">
                                                <Text>ICONE</Text>
                                            </Center>
                                            <Square bg="blue.500" size="20%">
                                                <Button colorScheme="teal" onClick={(e) => setCompletos(task.id_missao)}>Teste</Button>
                                            </Square>
                                            <Box flex="1" bg="tomato" >
                                                <Center><Text>{task.texto}</Text></Center>
                                            </Box>
                                        </>
                                        :
                                        <></>
                                    }
                                </Flex>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Missoes;