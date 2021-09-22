import React, { useState, useEffect, useCallback } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Progress, Button,
     Center, Image, Text, SimpleGrid, Skeleton
} from "@chakra-ui/react";
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


export async function getServerSideProps(ctx) {
    const slug = ctx.params.licao;
    return {
        props: {
            slug
        }
    }
}

function licao({ slug }) {
    const [tabIndex, setTabIndex] = React.useState(0)

    const handleTabsChange = (index) => {
        setTabIndex(index)
    }
    const handleNext = () => {
        setTabIndex(tabIndex + 1);
    }
    return (
        <>
            <Box p='10'>
                <Link href="/inicio" as={`/inicio`}>
                    <Button marginBottom="2vh"><h2>Voltar</h2></Button>
                </Link>
                <Progress colorScheme="green" height="32px" value={tabIndex * 11} max={100} borderRadius="10px" />
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
                    <Tab>Eleven</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Licao1 slug={slug} handleNext={handleNext} index={tabIndex}/>
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
                    <div className="mobile-hide">
                <SimpleGrid columns={2} spacing={10} m="10">
                    <Box height="auto" width="100%">aaaa</Box>
                    <Box height="auto" width="80%">
                        <Skeleton height="400px" />
                    </Box>
                </SimpleGrid>
            </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default licao;