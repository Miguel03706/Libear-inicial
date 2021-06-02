import React from "react";
import Header from "../components/header"

function Missions() {
    return (
        <>
            <Header inicio={false} missoes={true} loja={false} config={false}/>
            <h1>Missões</h1>
        </>
    )
}

export default Missions;