import { Button, Image, SimpleGrid, GridItem, Text, Box, Container, IconButton } from "@chakra-ui/react"
import { FaFacebook } from 'react-icons/fa'
import FooterMobile from "./footerMobile"
import styles from "./footer.module.scss"

function Footer() {

    return (
        <>
            <div className="mobile-hide">
                <div className={styles.footer}>
                    <SimpleGrid columns={3} spacing={10}>
                        <GridItem w="100%" h="100px">
                            <Image src="icons/logo_urso.webp" alt="desenho de um urso polar sorrindo" />
                        </GridItem>
                        <GridItem w={{ base: "150%", md: "100%", lg: "100%" }} h="100px" >
                            <Text fontSize={{ base: "7px", md: "16px", lg: "18px" }} color="white" lineHeight="100px" textAlign="center">Contato@libear.com.br</Text>
                        </GridItem>
                        <GridItem w="100%" h="100px">
                            <Container centerContent h="100px" >
                                <Box h="100%" marginTop="25px">
                                    <IconButton
                                        isRound={true}
                                        colorScheme="facebook"
                                        aria-label="Call Segun"
                                        size="lg"
                                        icon={<FaFacebook />}
                                    />
                                </Box>
                            </Container>
                        </GridItem>
                    </SimpleGrid>
                </div>
            </div>

            <div className="mobile">
                <div className="desktop-hide">
                    <FooterMobile />
                </div>
            </div>

        </>
    );
}

export default Footer;