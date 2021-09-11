import React, { useEffect } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import RegistrarAtividade from './RegistrarAtividade';
import CriarAtividade from './CriarAtividade';
import axios from "axios"

function adminPainel() {

    return (
        <>
            <Tabs variant="soft-rounded" colorScheme="green" direction='ltr'>
                <TabList>
                    <Tab>Vizualizar atividades</Tab>
                    <Tab>Adicionar atividade</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <RegistrarAtividade/>
                    </TabPanel>
                    <TabPanel>
                        <CriarAtividade/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default adminPainel;