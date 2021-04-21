import {useState ,useEffect} from "react"
import Header from "../components/header"
import {Button} from "@chakra-ui/react"
function Begin() {
    const [data, setData] = useState(null);
    const [loader, setLoader] = useState(true);


    

    return (
        <>
          <Header inicio={true} missoes={false} loja={false} config={false}/>
                <h1>Inicio</h1>
        </>
    )
}

export default Begin;