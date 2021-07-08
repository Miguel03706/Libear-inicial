import React, { useEffect, useState } from 'react';
import axios from "axios"
import {
    Select
} from "@chakra-ui/react"

function editarAtividade() {
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
            <Select placeholder="Selecione o ID">
                {atividades.map(atividade => (
                    <option key={atividade.id_atividade} value={atividade.id_atividade}>{atividade.id_atividade}</option>
                ))}
            </Select>
        </>
    )
}

export default editarAtividade;