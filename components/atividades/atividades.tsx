//import styles from "./atividades.module.scss";
import React, { useState, useEffect } from "react";
import { CircularProgress, CircularProgressLabel, Image, Center, Link } from "@chakra-ui/react";
import axios from "axios";
import styles from "./atividades.module.scss"
function Atividades() {

    const [atividades, setAtividades] = useState([]);

    async function listarAtividades() {
        const res = await axios.get('http://localhost/api/atividades.php');
        setAtividades(res.data.result);
        console.log(res.data.result);
    }

    useEffect(() => {
        listarAtividades();
    }, []);

    return (
        <>
            {atividades.map(atividade => (
                <li key={atividade.id_atividade} className={styles.lista}>
                    <Link>
                        <CircularProgress value={atividade.progresso} size="100px" color="#E5DE2F">
                            <CircularProgressLabel>
                                <Center><Image src={`icons/atividades/${atividade.img}`} h="85px" /></Center>
                            </CircularProgressLabel>
                        </CircularProgress>
                    </Link>
                </li>
            ))
            }
        </>
    )
}

export default Atividades;