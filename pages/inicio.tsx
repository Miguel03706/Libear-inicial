import { useState, useEffect } from "react"
import Header from "../components/header"
import Atividades from "../components/atividades"
import { Button, Flex, Spacer, Center, Text, Wrap,WrapItem } from "@chakra-ui/react"
import axios from "axios";

function Begin() {
    const [data, setData] = useState(null);
    const [loader, setLoader] = useState(true);

    const [lista, setLista] = useState([]);



    async function listarDados() {
        const res = await axios.get('http://localhost/api/listar.php');
        setLista(res.data.result);
        console.log(res.data.result);
    }

    useEffect(() => {
        listarDados();
    }, []);

    return (
        <>
            <Header inicio={true} missoes={false} loja={false} config={false} />


            <div className="mobile-hide">
                <Flex>
                   
                    <Center w="60%" m="2">
                        <Atividades />
                    </Center>
                    <Center w="35%" m="2" bg="green.500">
                        <Text>Box 1</Text>
                    </Center>
                </Flex>

            </div>

            <div className="mobile">
                <div className="desktop-hide">
                </div>
            </div>


        </>
    )
}

export default Begin;