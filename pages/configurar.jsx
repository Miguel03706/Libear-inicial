import React from "react";
import Header from "../components/header"
import UserConfig from "../components/UserConfig"

function Config() {
    return (
        <>
            <Header inicio={false} missoes={false} loja={false} config={true}/>
            <UserConfig/>
        </>
    )
}

export default Config;