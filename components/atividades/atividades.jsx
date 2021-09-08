//import styles from "./atividades.module.scss";
import React, { useState, useEffect, useContext } from "react";
import {
    CircularProgress, CircularProgressLabel, Image, Center, Popover, PopoverTrigger,
    PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton,
    Button, Portal, useDisclosure
} from "@chakra-ui/react";
import Link from "next/link";
import axios from "axios";
import AuthContext from "../state/Auth/Context"

import styles from "./atividades.module.scss";


function Atividades() {
    const initialFocusRef = React.useRef()
    const usuario = useContext(AuthContext);

    const [atividades, setAtividades] = useState([]);
    const [progresso, setProgresso] = useState([]);
    const [color, setColor] = useState('');

    async function listarAtividades() {
        const res = await axios.get(`http://localhost/api/atividades.php?`);
        setAtividades(res.data.result);
    }
    async function listarProgresso() {
        const res = await axios.get(`http://localhost/api/progresso.php?id=${usuario.uid}`);
        setProgresso(res.data.result[0]);
    }
    useEffect(() => {
        listarAtividades();
        listarProgresso();
    }, []);
    useEffect(() => {
        console.log(progresso)
        console.log(atividades)
    }, [progresso]);

    useEffect(() => {
        if (localStorage.getItem('chakra-ui-color-mode') == "dark") {
            setColor('#49CFE1');

        } else {
            setColor('#E5DE2F');
        }
    }, [setColor]);

    return (
        <>
            {atividades.map(atividade => (
                <div key={atividade.id_atividade} className={styles.lista}>
                    <Center>
                        <CircularProgress value={progresso.atividade1} size="100px" color={color}>
                            <CircularProgressLabel>
                                <Popover initialFocusRef={initialFocusRef}
                                    placement="bottom"
                                    closeOnBlur={true}
                                >
                                    <PopoverTrigger>
                                        <Button colorScheme="#00FFFFFF" className={styles.button} h="80px"><Center><Image src={`icons/atividades/${atividade.img}`} h="70px" /></Center></Button>
                                    </PopoverTrigger>
                                    <Portal>
                                        <PopoverContent boxShadow="none !important">
                                            <PopoverArrow />
                                            <div className={styles.licao} key={atividade.id_atividade}>
                                                <div className={styles.titulo}><Center>{atividade.titulo}</Center></div>
                                                {atividade.progresso == 0 ? "lição 0/4" : ""}
                                                {atividade.progresso == 25 ? "lição 1/4" : ""}
                                                {atividade.progresso == 50 ? "lição 2/4" : ""}
                                                {atividade.progresso == 75 ? "lição 3/4" : ""}
                                                {atividade.progresso >= 100 ? "lição 4/4" : ""}
                                            </div>
                                            <PopoverCloseButton />
                                            <PopoverBody className={styles.popBody}>
                                                <Link href="explicacao/[explicacao]" as={`explicacao/${atividade.id_atividade}`}>
                                                    <div className={styles.button}><Button colorScheme="blue" w="100%">Explicação</Button><br /></div>
                                                </Link>
                                                <Link href="licao/[licao]" as={`licao/${atividade.id_atividade}`}>
                                                    <Button colorScheme="blue" w="100%">Atividade</Button>
                                                </Link>
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Portal>
                                </Popover>

                            </CircularProgressLabel>
                        </CircularProgress>
                    </Center>
                </div>
            ))
            }
        </>
    )
}

export default Atividades;