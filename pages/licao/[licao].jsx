import React, { useState, useEffect, useCallback } from 'react';
import {
    Tabs, TabList, TabPanels, Tab, TabPanel, Box, Progress, Button,
    Center, Image, Text, SimpleGrid, useToast
} from "@chakra-ui/react";
import { useRouter } from 'next/router';
import Link from "next/link";
import DB from "../api/MySQL"
import Licao1 from "../../components/Licoes/licao1";
import Licao2 from "../../components/Licoes/licao2";
import Licao3 from "../../components/Licoes/licao3";
import Licao4 from "../../components/Licoes/licao4";
import Licao5 from "../../components/Licoes/licao5";
import Licao6 from "../../components/Licoes/licao6";
import Licao7 from "../../components/Licoes/licao7";
import Licao8 from "../../components/Licoes/licao8";
import Licao9 from "../../components/Licoes/licao9";
import Licao10 from "../../components/Licoes/licao10";
import styles from "./licao.module.scss";

export async function getServerSideProps(ctx) {
    const slug = ctx.params.licao;
    return {
        props: {
            slug
        }
    }
}

function licao({ slug }) {
    const router = useRouter();
    const [tabIndex, setTabIndex] = React.useState(0)
    const toast = useToast();

    const handleTabsChange = (index) => {
        setTabIndex(index)
    }
    const handleNext = () => {
        setTabIndex(tabIndex + 1);
    }

    const handleFinaliza = useCallback(evt => {
        evt.preventDefault();
        toast({
            title: "Atividade completa",
            description: "Dinheiro: +100 / XP: +20",
            status: "success",
            duration: 2500,
            isClosable: false,
          })
        DB.completaAtividade(slug).then(router.push('/inicio'));
    }, [])

    return (
        <>
            <Box p='10'>
                <Link href="/inicio">
                    <Button marginBottom="2vh"><h2>Voltar</h2></Button>
                </Link>
                <Progress colorScheme="green" height="32px" value={tabIndex * 11} max={100} borderRadius="10px" />
            </Box>
            <Tabs index={tabIndex} onChange={handleTabsChange}>
                <TabPanels>
                    <TabPanel>
                        <Licao1 slug={slug} handleNext={handleNext} index={tabIndex} />
                    </TabPanel>
                    <TabPanel>
                        <Licao2 slug={slug} handleNext={handleNext} />
                    </TabPanel>
                    <TabPanel>
                        <Licao3 slug={slug} handleNext={handleNext} />
                    </TabPanel>
                    <TabPanel>
                        <Licao4 slug={slug} handleNext={handleNext} />
                    </TabPanel>
                    <TabPanel>
                        <Licao5 slug={slug} handleNext={handleNext} />
                    </TabPanel>
                    <TabPanel>
                        <Licao6 slug={slug} handleNext={handleNext} />
                    </TabPanel>
                    <TabPanel>
                        <Licao7 slug={slug} handleNext={handleNext} />
                    </TabPanel>
                    <TabPanel>
                        <Licao8 slug={slug} handleNext={handleNext} />
                    </TabPanel>
                    <TabPanel>
                        <Licao9 slug={slug} handleNext={handleNext} />
                    </TabPanel>
                    <TabPanel>
                        <Licao10 slug={slug} handleNext={handleNext} />
                    </TabPanel>
                    <TabPanel>
                        <>
                            <SimpleGrid columns={1} spacing={10} m="10">
                                <Box height="50%" width="100%"><Center><Image src={`../skins/polar.webp`} h="60vh"/></Center></Box>
                                <Box height="auto" width="100%">
                                    <Link href="../inicio" as={`../inicio`}>
                                        <div className={styles.button}>
                                            <Center><Button colorScheme="blue" w="30%" onClick={handleFinaliza}>Finalizar tarefa</Button></Center>
                                        </div>
                                    </Link>
                                </Box>
                            </SimpleGrid>
                        </>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default licao;