import Link from "next/link"
import { Image, Button, Heading, Text, Center, GridItem, SimpleGrid } from "@chakra-ui/react";
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
          <SimpleGrid columns={2} spacing={10} spacingY="100px">
            <GridItem w="100%" h="auto">
              <Image src="images/planeta-terra.webp" alt="foto do planeta Terra" />
            </GridItem>
            <GridItem w="100%" h="auto">
              <Center h="100px"><p>Ensino de qualidade</p></Center>
              <Text letterSpacing="2px" textAlign="center">
                O jeito mais inovador de aprender idiomas! Aprender com o Libear é divertido e viciante.
                Ganhe pontos ao acertar, corra contra o tempo e passe de nível. As nossas aulas são rápidas
                e eficazes.
              </Text>
            </GridItem>
            <GridItem w="100%" h="auto">
              <Image src="images/moeda.webp" alt="foto do planeta Terra" />
            </GridItem>
            <GridItem w="100%" h="auto">
              <Center h="100px"><p>Libear premium</p></Center>
              <Text letterSpacing="2px" textAlign="center">
                Melhore o seu aprendizado com o Libear premium
                Aprender um idioma no Libear é totalmente gratuito, mas você pode remover
                os anúncios e apoiar a educação gratuita com o premium.
              </Text>
            </GridItem>
          </SimpleGrid>
        </div>
       
      </div>

      <div className="mobile">
        <div className="desktop-hide">
        </div>
      </div>
    </>
  )
}
