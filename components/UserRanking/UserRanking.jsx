import react, { useState, useEffect } from "react";
import DB from "../../pages/api/MySQL";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Text,
    Center
} from "@chakra-ui/react"
import styles from "./userRanking.module.scss"

function UserRanking() {
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        DB.listarRanking().then(setRanking)
    }, []);

    return (
        <>
            <div className={styles.container} >
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>usuário</Th>
                            <Th>Experiência</Th>
                            <Th>Posição</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {ranking.map(usuarios => {
                            return (
                                <Tr key={usuarios.id}>
                                    <Td><Text><Center>{usuarios.user}</Center></Text></Td>
                                    <Td><Text><Center>{usuarios.pontos}</Center></Text></Td>
                                    <Td><Text><Center>{usuarios.posicao + 'º'}</Center></Text></Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>

            </div>
        </>
    )

}

export default UserRanking;