import React from "react";
import Header from "../components/header"
import UserConfig from "../components/UserConfig"
import { Image, Button,useColorMode } from "@chakra-ui/react";

function Config() {
  const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <Header inicio={false} missoes={false} loja={false} config={true}/>
            <UserConfig/>
            
            <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
        </>
    )
}

export default Config;