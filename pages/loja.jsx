import React from "react";
import Header from "../components/header"
import Vendas from "../components/Vendas"
function Store() {
    return (
        <>
            <Header inicio={false} missoes={false} loja={true} config={false}/>
            <Vendas />
        </>
    )
}

export default Store;