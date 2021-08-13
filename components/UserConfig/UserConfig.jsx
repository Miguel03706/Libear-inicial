import React, { useEffect, useState, useCallback } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from "axios";
import UserPc from "./components/UserPc"
import Inputs from "./components/Inputs"

import {
    Image, Center, Button, Input, useToast, Skeleton, Box, Grid, GridItem,
    VisuallyHidden, Text, InputGroup, InputRightElement, Modal, ModalOverlay,
    ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
    Portal, useDisclosure, Lorem
} from "@chakra-ui/react";
import styles from "./UserConfig.module.scss";

function UserConfig() {
    const [config, setConfig] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef()

    useEffect(() => {
        verificarDados()
    }, []);


    async function verificarDados() {
        let id = JSON.parse(localStorage.getItem("id_user"));
        const res = await axios.get(`http://localhost/api/listar.php?id=${id}`);
        setConfig(res.data.result)
    }

    return (
        <>
            <div className={styles.container}>
                {config.map(configurar => {
                    return (
                        <>
                            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                                <Box w="100%" h="10vh">
                                    <Text p="5"><h2>Seu Perfil:</h2></Text>
                                </Box>
                                <Box w="100%" h="10vh" />
                            </Grid>
                            <Center><Image src={`user/user_img/${configurar.img}.webp`} h="100px" /></Center>
                            <Center>
                                    <h2><Text onClick={onOpen} cursor="pointer" _hover={{ color: "#48d1cc"}}>ALTERAR IMAGEM</Text></h2>
                            </Center>
                                <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent>
                                        <ModalHeader>Modal Title</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            aaaaaaaaaaaaaaa
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button colorScheme="blue" mr={3} >
                                                Atualizar
                                            </Button>
                                            <Button variant="ghost" onClick={onClose}>Cancelar</Button>
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>
                            <Inputs />

                            <div className="mobile-hide">
                                <UserPc />
                            </div>

                            <div className="mobile">
                                <div className="desktop-hide">

                                </div>
                            </div>

                        </>
                    )
                })}
            </div>
        </>
    )
}

export default UserConfig;