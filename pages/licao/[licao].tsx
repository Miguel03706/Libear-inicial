import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Progress, Button } from "@chakra-ui/react";


function licao() {

    const [tabIndex, setTabIndex] = React.useState(0)

    const handleSliderChange = (event) => {
        setTabIndex(parseInt(event.target.value, 10))
    }

    const handleTabsChange = (index) => {
        setTabIndex(index)
    }
    const handleNext = () => {
        setTabIndex(tabIndex + 1)
    }

    return (
        <Box>
            <Box p='10'>
                <Progress colorScheme="green" height="32px" value={tabIndex * 10} max={90}  borderRadius="10px"/>
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
                        <p>Click the tabs or pull the slider around</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Yeah yeah. What's up?</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Oh, hello there.</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Oh, hello there.</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Box align='right' marginRight="10" p='5'>
                <Button colorScheme="teal" size="lg" onClick={handleNext}>
                    Proximo
                </Button>
            </Box>
        </Box>
    )
}

export default licao;