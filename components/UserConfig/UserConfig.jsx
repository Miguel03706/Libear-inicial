import React, { useEffect, useState, useCallback, useContext } from "react";
import API from "../../pages/api/Api";
import AuthContext from "../state/Auth/Context"
import Inputs from "./components/Inputs"
import {
    Image, Center, Button, Input, useToast, Skeleton, Box, Grid, GridItem,
    VisuallyHidden, Text, InputGroup, InputRightElement, Modal, ModalOverlay,
    ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
    Portal, useDisclosure, Lorem, useColorMode, Stack, SimpleGrid, Switch, Radio, RadioGroup    
} from "@chakra-ui/react";
import styles from "./UserConfig.module.scss";

function UserConfig() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const userKey = Object.keys(window.sessionStorage)
            .filter(it => it.startsWith('firebase:authUser'))[0];
        const user = userKey ? JSON.parse(sessionStorage.getItem(userKey)) : undefined;
        setUser(user);
    }, []);
    const [img, setImg] = useState([]);
    const [value, setValue] = React.useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef()

    useEffect(() => {
        API.userImg().then(setImg);
    }, []);

    const handleImg = useCallback((evt) => {
        evt.preventDefault();
        API.userUpdateImage(value);
    });

    return (
        <>
            <div className={styles.container}>
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <Box w="100%" h="10vh">
                        <Text p="5" fontFamily='Karla' fontWeight="bold !important">Seu Perfil:</Text>
                    </Box>
                    <Box w="100%" h="10vh" />
                </Grid>
                <Center><Image src={`user/user_img/${user.photoURL}.webp`} h="100px" /></Center>
                <Center>
                    <Text onClick={onOpen} cursor="pointer" _hover={{ color: "#48d1cc" }} fontFamily='Karla' fontWeight="bold !important">ALTERAR IMAGEM</Text>
                </Center>
                
                <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Imagens</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <SimpleGrid columns={3} spacing={2}>
                                {img.map(img => {
                                    return (
                                        <div key={img.name}>
                                            <RadioGroup onChange={setValue} value={value}>
                                                <Stack direction="row">
                                                    <Radio value={img.name}>
                                                    <Image src={`user/user_img/${img.name}.webp`} h="100%"
                                                    boxSize="100px"
                                                    objectFit="cover"
                                                    alt={`${img.name}`}
                                                />
                                                    </Radio>
                                                </Stack>
                                            </RadioGroup>
                                        </div>
                                    )
                                })}
                            </SimpleGrid>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={handleImg}>
                                Atualizar
                            </Button>
                            <Button variant="ghost" onClick={onClose}>
                                Fechar
                                </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                <Inputs />
            </div>
        </>
    )
}

export default UserConfig;