import Link from "next/link"
import { Image, Button, Heading, Text, Center, Grid, GridItem, Box, Divider } from "@chakra-ui/react";
import styles from "../styles/Home.module.scss"


export default function Home() {
  return (
    <>
      <div className="mobile-hide">
        <div className={styles.header}>
          <Image src="images/polar.webp" alt="foto de um urso na antartida" />
          <div>
            <span>
              <Text fontSize={{ base: "12px", md: "18px", lg: "25px" }} color='black' letterSpacing="2px">Aprenda libras da melhor maneira!</Text>
            </span>

            <Link href="/inicio">
              <Button colorScheme="blue" className={styles.btn_start}>Começar</Button>
            </Link>
            <Link href="/inicio">

              <Button colorScheme="blue" variant="solid" className={styles.btn_login}>
                Já tenho uma conta
            </Button>
            </Link>
          </div>
        </div>
        <div className={styles.container}>
          <Center>
            <Heading as='h1' color="black" fontFamily="arial" marginTop="50px"> Libear </Heading>
          </Center>
          <Grid
            h="auto"
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={12}
          >
            <GridItem colSpan={2} w="100%" h="auto"><Image src="images/planeta-terra.webp" alt="foto do planeta Terra" /></GridItem>
            <GridItem colSpan={3} w="100%" h="auto">
              <Center h="100px"><p>Ensino de qualidade</p></Center>
              <Text letterSpacing="2px">
                O jeito mais inovador de aprender idiomas! Aprender com o Libear é divertido e viciante.
                Ganhe pontos ao acertar, corra contra o tempo e passe de nível. As nossas aulas são rápidas
                e eficazes.
              </Text>
            </GridItem>
            <GridItem colSpan={2} w="100%" h="auto"><Image src="images/moeda.webp" alt="foto do planeta Terra" /></GridItem>
            <GridItem colSpan={3} w="100%" h="auto">
              <Center h="100px"><p>Libear premium</p></Center>
              <Text letterSpacing="2px">
                Melhore o seu aprendizado com o Libear premium
                Aprender um idioma no Libear é totalmente gratuito, mas você pode remover 
                os anúncios e apoiar a educação gratuita com o premium.
              </Text>
            </GridItem>
            <Divider />
          </Grid>


        </div>
      </div>

      <div className="mobile">
        <div className="desktop-hide">
        </div>
      </div>



    </>
  )
}
