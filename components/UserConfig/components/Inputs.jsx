import React, { useEffect, useState, useCallback, useContext } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import AuthContext from "../../state/Auth/Context"
import API from "../../../pages/api/Api";
import {
    Image, Center, Button, Input, useToast, Skeleton, Box, Grid,
    GridItem, VisuallyHidden, Text, InputGroup, InputRightElement, InputRightAddon, BoxModal,
    ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Modal,
    useDisclosure, useColorMode, Popover, PopoverTrigger, PopoverContent, PopoverHeader,
     PopoverBody, PopoverArrow, PopoverCloseButton, Portal
} from "@chakra-ui/react";
import styles from "../UserConfig.module.scss";

function Inputs() {
    const usuario = useContext(AuthContext);
    const [userName, setUserName] = useState(usuario.displayName);
    const [userEmail, setEmail] = useState(usuario.email);
    const [userPassword, setPassword] = useState("");
    const [show, setShow] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()
    const initialFocusRef = React.useRef()
    const handleShow = () => setShow(!show)

    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            email: yup.string()
                .required('Você precisa digitar seu email.')
                .email("preencha com um email válido"),
            password: yup.string()
                .required('Você precisa digitar sua senha.')
                .min(8, "a senha deve ter no minimo 8 caracteres"),
            userName: yup.string()
        }),
        validateOnChange: false, //valida a acada caractere adicionado
        validateOnBlur: false, // valida ao sair do form(ou clicar fora do input)
    });

    const handleUserName = useCallback((evt) => {
        evt.preventDefault();
        setUserName(evt.target.value)
    })
    const handleEmail = useCallback((evt) => {
        evt.preventDefault();
        setEmail(evt.target.value)
    })
    const handlePassword = useCallback((evt) => {
        evt.preventDefault();
        setPassword(evt.target.value)
    })
    const handleLogout = async () => {
        API.logOut();
    }
    const handleDelete = async () => {
        API.deletarConta();
    }

    const handleUpdate = (evt) => {
        evt.preventDefault();
        API.userUpdate(userEmail, userName);
    }
    const handleUpdatePassword = (evt) => {
        evt.preventDefault();
        API.userUpdatePassword(userPassword);
    }

    return (
        <>
            <Center marginTop="5vh" marginBottom="5vh">
                <p>
                    <Text fontFamily='Karla' fontWeight="bold !important" >Nome de usuario:</Text>
                    <Input
                        w="100%"
                        type="text"
                        {...formik.getFieldProps("userName")}
                        className={styles.password}
                        value={userName}
                        onChange={handleUserName}
                        autoComplete="off"

                    />
                </p>
            </Center>
            <Center marginTop="5vh" marginBottom="5vh">
                <p>
                    <Text fontFamily='Karla' fontWeight="bold !important" >Email:</Text>
                    <Input
                        w="100%"
                        type="text"
                        {...formik.getFieldProps("email")}
                        className={styles.password}
                        value={userEmail}
                        onChange={handleEmail}
                    />
                </p>
            </Center>
            <Center marginTop="5vh" marginBottom="1vh">
                <p>
                    <Text fontFamily='Karla' fontWeight="bold !important">Senha: </Text>
                    <InputGroup>
                        <Input
                            w="100%"
                            {...formik.getFieldProps("password")}
                            type={show ? "text" : "password"}
                            className={styles.password}
                            placeholder="Alterar senha"
                            value={userPassword}
                            onChange={handlePassword}
                        />
                        <InputRightElement width="auto" marginRight="5px">
                            <Button h="1.75rem" onClick={handleShow}>
                                {show ? "Esconder" : "Mostrar"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </p>

            </Center>
            <Center marginTop="0" marginBottom="3vh">
                <Button colorScheme="blue" variant="solid" w="250px" onClick={onOpen}>
                    Alterar senha
                </Button>
            </Center>
            <Center marginTop="2vh" marginBottom="2vh">
                <Button onClick={toggleColorMode} bg={colorMode === "light" ? "#000000" : "whiteAlpha"} w="200px" _hover={colorMode === "light" ? { bg: "#212529" } : { bg: "#495057" }}>
                    <Text color="white">Modo {colorMode === "light" ? "Noturno" : "Claro"}</Text>
                </Button>
            </Center>
            <Center marginTop="2vh" marginBottom="2vh">
                <Button colorScheme="teal" variant="solid" w="200px" onClick={handleUpdate}>
                    Atualizar
                </Button>
            </Center>
            <Center marginTop="2vh" marginBottom="5vh">
                <Button colorScheme="red" variant="solid" onClick={handleLogout} w="200px">
                    Deslogar
                </Button>
            </Center>
            <Center marginTop="2vh" marginBottom="5vh">
                <Popover initialFocusRef={initialFocusRef}
                    placement="top"
                    closeOnBlur={true}
                >
                    <PopoverTrigger>
                        <Button colorScheme="red" variant="solid" w="200px">
                            Excluir conta
                        </Button>
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent boxShadow="none !important">
                            <PopoverArrow />
                            <Center marginTop="5px"><h2>Você tem certeza?</h2></Center>
                            <PopoverCloseButton />
                            <PopoverBody>
                                <div><Button colorScheme="red" w="100%" onClick={handleDelete} marginBottom="10px">Sim</Button><br /></div>
                            </PopoverBody>
                        </PopoverContent>
                    </Portal>
                </Popover>
            </Center>


            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Alterar senha</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Voce tem certeza que deseja alterar sua senha?
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleUpdatePassword}>
                            Alterar senha
                        </Button>
                        <Button variant="ghost" onClick={onClose}>Fechar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Inputs;