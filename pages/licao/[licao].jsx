import React, { useState, useEffect, useCallback } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Progress, Button, Center, Image, Text } from "@chakra-ui/react";
import Licao1 from "../../components/Licoes/licao1";
import Licao2 from "../../components/Licoes/licao2";
import Licao3 from "../../components/Licoes/licao3";
export async function getServerSideProps(ctx) {
    const slug = ctx.params.licao;
    return {
        props: {
            slug
        }
    }
}

function licao({ slug }) {

    const [licao, setLicao] = useState([]);
    const [licaoOp, setLicaoOp] = useState([]);

    async function listarLicao() {
        const res = await axios.get(`http://localhost/api/admin/atividades.php?id=${slug}`);
        setLicao(res.data.result);
    }
    useEffect(() => {
        listarLicao();
        var teste = [0, 1, 2, 3];
        shuffleArray(teste);
        setLicaoOp(teste)
    }, []);

    const [tabIndex, setTabIndex] = React.useState(0)

    const handleTabsChange = (index) => {
        setTabIndex(index)
    }
    const handleNext = (value) => {
        setTabIndex(tabIndex + 1);
    }

    function shuffleArray(inputArray) {
        inputArray.sort(() => Math.random() - 0.5);
    }


    return (
        <>
            <Box p='10'>
                <Progress colorScheme="green" height="32px" value={tabIndex * 10} max={90} borderRadius="10px" />
            </Box>
            <Tabs index={tabIndex} onChange={handleTabsChange}>
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                    <Tab>Four</Tab>
                    <Tab>Five</Tab>
                    <Tab>Six</Tab>
                    <Tab>Seven</Tab>
                    <Tab>Eight</Tab>
                    <Tab>Nine</Tab>
                    <Tab>Ten</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Licao1 slug={slug} handleNext={handleNext} />
                    </TabPanel>
                    <TabPanel>
                        <Licao2 slug={slug} handleNext={handleNext} />
                    </TabPanel>
                    <TabPanel>
                        <Licao3 slug={slug} handleNext={handleNext} />
                    </TabPanel>
                    <TabPanel>
                        <p>Oh, hello there.</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default licao;