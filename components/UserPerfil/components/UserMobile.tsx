import React from "react";
import {
    Image, Center, Button, Input, useToast, Skeleton, Box, Grid, GridItem, VisuallyHidden, useColorMode
} from "@chakra-ui/react";
import styles from "../UserPerfil.module.scss";


function UserMobile({ handleCopy }) {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <Center p="10px">
            </Center>
            <Center p="10px">
                <Box
                    bg={colorMode === "light" ? "#CCC" : "black"}
                    w="80vw"
                    h="250px"
                    p={4}
                    color="black"
                    border="solid black 1px"
                    borderRadius="10px"
                >
                    <Grid
                        h="auto"
                        templateRows="repeat(2, 1fr)"
                        templateColumns="repeat(5, 1fr)"
                        gap={4}
                    >
                        <GridItem rowSpan={2} colSpan={2}>
                            <Center><Image src='icons/amigos.webp' h="auto" marginTop="70%" /></Center>
                        </GridItem>
                        <GridItem colSpan={3}>
                            <Center textAlign="center"><h2>Convide Amigos!</h2></Center>
                            <Center textAlign="center"> Chame seus amigos e ajude a lingua brasileira de sinais</Center>
                        </GridItem>
                        <GridItem colSpan={3}>
                            <Center><Button colorScheme="blue" className={styles.btn_start} marginTop="5%" w="80%" onClick={handleCopy}>Compartilhar</Button></Center>
                        </GridItem>
                    </Grid>
                </Box>
                <VisuallyHidden><textarea className="text" value="http://localhost:3000" readOnly></textarea></VisuallyHidden>
            </Center>
        </>
    );
}

export default UserMobile;