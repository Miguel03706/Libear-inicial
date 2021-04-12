import Header from "../components/header"

function Store() {
    return (
        <>
            <Header inicio={false} missoes={false} loja={true} config={false}/>
            <h1>Loja</h1>
        </>
    )
}

export default Store;