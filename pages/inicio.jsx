import React, { useState, useEffect, useContext } from "react";
import Header from "../components/header"
import Atividades from "../components/atividades"
import AuthContext from "../components/state/Auth/Context";
import { Button, Flex, Spacer, Center, Text, SimpleGrid, Box, Skeleton } from "@chakra-ui/react"
import axios from "axios";

function Begin() {
    const [loader, setLoader] = useState(true);
    
    useEffect(() => {
        window.localStorage.removeItem("redirect");
    }, []);

    return (
        <>
            <Header inicio={true} missoes={false} loja={false} config={false} />

            <div className="mobile-hide">
                <SimpleGrid columns={2} spacing={10} m="10">
                    <Box height="auto" width="100%"><Atividades /></Box>
                    <Box height="auto" width="80%">
                        <Skeleton height="400px" />
                    </Box>
                </SimpleGrid>
            </div>

            <div className="mobile">
                <div className="desktop-hide">
                </div>
            </div>


        </>
    )
}

export default Begin;