import React, { useEffect, useState } from "react";
import axios from "axios";
import {Center, Image, Text, Button, Box } from "@chakra-ui/react";

function Licao1({ slug, handleNext }) {
    const [licao, setLicao] = useState([]);
    const [licaoOp, setLicaoOp] = useState([]);

    async function listarLicao() {
        const res = await axios.get(`http://localhost/api/admin/atividades.php?id=${slug}`);
        setLicao(res.data.result);
    }
    useEffect(() => {
        listarLicao();
        var teste = [0, 1, 2, 3];
        shuffleArray(teste);
        setLicaoOp(teste)
    }, []);

    function shuffleArray(inputArray) {
        inputArray.sort(() => Math.random() - 0.5);
    }

    return (
        <>
            {licao.map(atividade => (
                <div key={atividade.id_atividade}>
                    <div>
                        <Center>
                            <Image src={`../../images/atividades/${atividade.licao.atividade1.imagem}`} h="300px" w="60%" />
                        </Center>
                    </div>
                    <div>
                        <Center>
                            <Text>{atividade.licao.atividade1.texto}</Text>
                        </Center>
                    </div>
                    <div>
                        {atividade.licao.atividade1.res_escrita == 0 ?
                            <>
                                <Center>
                                    <Button>{atividade.licao.atividade1.options[licaoOp[0]]}</Button>
                                    <Button>{atividade.licao.atividade1.options[licaoOp[1]]}</Button>
                                    <Button>{atividade.licao.atividade1.options[licaoOp[2]]}</Button>
                                    <Button>{atividade.licao.atividade1.options[licaoOp[3]]}</Button>
                                </Center>
                            </>
                            : null
                        }
                    </div>
                    <Box align='right' marginRight="10" p='5'>
                        <Button colorScheme="teal" size="lg" onClick={handleNext}>
                            Proximo
                        </Button>
                    </Box>
                </div>
            ))}
        </>
    )
}

export default Licao1;