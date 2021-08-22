import React from "react";
import Header from "../components/header"
import UserConfig from "../components/UserConfig"
import { Image, Button,useColorMode } from "@chakra-ui/react";

function Config() {

    return (
        <>
            <Header inicio={false} missoes={false} loja={false} config={true}/>
            <UserConfig/>
        
        </>
    )
}

export default Config;