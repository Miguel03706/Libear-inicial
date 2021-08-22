import React, { useEffect, useState, useCallback, useContext } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import API from "../../pages/api/Api";
import axios from "axios";
import AuthContext from "../state/Auth/Context"
import Inputs from "./components/Inputs"
import {
    Image, Center, Button, Input, useToast, Skeleton, Box, Grid, GridItem,
    VisuallyHidden, Text, InputGroup, InputRightElement, Modal, ModalOverlay,
    ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
    Portal, useDisclosure, Lorem, useColorMode,Flex
} from "@chakra-ui/react";
import styles from "./UserConfig.module.scss";

function UserConfig() {
    //const [config, setConfig] = useState([]);
    const [img, setImg] = useState([]);
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const usuario = useContext(AuthContext)
    const finalRef = React.useRef()

    useEffect(() => {
        verificarDados();
        API.userImg().then(setImg);
    }, []);
    // useEffect(() => {
    //     console.log(img)
    // }, [img]);

    async function verificarDados() {
        const id = usuario.uid;
        console.log(id)
    }

    const handleImg = useCallback(() => {

    });

    return (
        <>
            <div className={styles.container}>
                <>
                    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                        <Box w="100%" h="10vh">
                            <Text p="5"><h2>Seu Perfil:</h2></Text>
                        </Box>
                        <Box w="100%" h="10vh" />
                    </Grid>
                    <Center><Image src={`user/user_img/${usuario.photoURL}.webp`} h="100px" /></Center>
                    <Center>
                        <h2><Text onClick={onOpen} cursor="pointer" _hover={{ color: "#48d1cc" }}>ALTERAR IMAGEM</Text></h2>
                    </Center>
                    <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Modal Title</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                {img.map(img => {
                                    return (
                                        <div key={img.name}>
                                                <Flex color="white">
                                                <Center w="100px" bg="green.500">
                                                    <Image src={`user/user_img/${img.name}.webp`} h="100px" onClick={handleImg} />
                                                    </Center>
                                                </Flex>
                                        </div>
                                    )
                                })}
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
                    </div>

                    <div className="mobile">
                        <div className="desktop-hide">

                        </div>
                    </div>
                    <Button onClick={toggleColorMode}>
                        Modo {colorMode === "light" ? "Noturno" : "Claro"}
                    </Button>
                </>

            </div>
        </>
    )
}

export default UserConfig;