//import styles from "./atividades.module.scss";
import React, { useState, useEffect, useContext, useCallback } from "react";
import {
    CircularProgress, CircularProgressLabel, Image, Center, Popover, PopoverTrigger,
    PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton,
    Button, Portal, useDisclosure, VisuallyHidden
} from "@chakra-ui/react";
import Link from "next/link";
import DB from "../../pages/api/MySQL";
import styles from "./atividades.module.scss";

const Atividades = () => {

    const initialFocusRef = React.useRef()
    const [atividades, setAtividades] = useState([]);
    const [color, setColor] = useState('');

    useEffect(() => {
        DB.exibirAtividade().then(setAtividades);
    }, []);

    useEffect(() => {
        if (localStorage.getItem('chakra-ui-color-mode') == "dark") {
            setColor('#49CFE1');

        } else {
            setColor('#E5DE2F');
        }
    }, [setColor]);

    return (
        <>
            {atividades.length <= 0 &&
                <>
                    <div className={styles.loading}>
                        <img src="../icons/uteis/loading.gif" alt="carregando" />
                    </div>
                </>
            }
            <>
                {atividades.map(atividade => (
                    <div key={atividade.id_atividade} className={styles.lista}>
                        <Center>
                            <CircularProgress value={atividade.progresso[`${atividade.id_atividade}`]['progresso']} size="100px" color={color}>
                                <CircularProgressLabel>
                                    <Popover initialFocusRef={initialFocusRef}
                                        placement="bottom"
                                        closeOnBlur={true}
                                    >
                                        <PopoverTrigger>
                                            <Button colorScheme="#00FFFFFF" className={styles.button} h="80px"><Center><Image src={`icons/atividades/${atividade.img}.webp`} h="70px" /></Center></Button>
                                        </PopoverTrigger>
                                        <Portal>
                                            <PopoverContent boxShadow="none !important">
                                                <PopoverArrow />
                                                <div className={styles.licao} key={atividade.id_atividade}>
                                                    <div className={styles.titulo}><Center><h2>{atividade.titulo}</h2></Center></div>
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
                        <Center><div className={styles.subTitulo}><h2>{atividade.titulo}</h2></div></Center>
                        </Center>
                    </div>
                ))}
            </>
        </>
    );
}
// Atividades.getInitialProps = async () => {
//     const usuario = useContext(AuthContext);
//     const response = await DB.exibirAtividade(usuario.uid);
//     console.log(response)
//     //return { dados: res.data }
//   }
export default Atividades;