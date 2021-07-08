import React, { useEffect, useState } from 'react';
import axios from "axios"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Text,
    Button
} from "@chakra-ui/react"

function registrarAtividade() {
    const [atividades, setAtividades] = useState([]);


    async function registrarDados() {
        const res = await axios.get('http://localhost/api/admin/atividades.php');
        setAtividades(res.data.result);
    }
    useEffect(() => {
        registrarDados();
    }, []);

    return (
        <>
            <Table variant="simple">
                <TableCaption></TableCaption>
                <Thead>
                    <Tr>
                        <Th>id_atividade</Th>
                        <Th>Imagem</Th>
                        <Th>Progresso</Th>
                        <Th>Titulo</Th>
                        <Th>Editar</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {atividades.map(atividade => (
                        <Tr key={atividade.id_atividade}>
                            <Td><Text>{atividade.id_atividade}</Text></Td>
                            <Td><Text>{atividade.img}</Text></Td>
                            <Td><Text>{atividade.progresso}</Text></Td>
                            {/* <Td><Text>{atividade.licao.atividade_1}</Text></Td> */}
                            <Td><Text>{atividade.titulo}</Text></Td>
                            <Td><Button>Editar</Button></Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            
        </>
    )
}

export default registrarAtividade;