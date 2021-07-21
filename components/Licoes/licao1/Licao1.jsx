import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Center, Image, Text, Button, Box, Textarea, RadioGroup, Stack, Radio } from "@chakra-ui/react";
import styles from "./licao1.module.scss";

function Licao1({ slug, handleNext }) {
    const [licao, setLicao] = useState([]);
    const [licaoOp, setLicaoOp] = useState([]);
    const [res, setRes] = useState('');

    async function listarLicao() {
        const res = await axios.get(`http://localhost/api/admin/atividades.php?id=${slug}`);
        setLicao(res.data.result);
    }

    function shuffleArray(inputArray) {
        inputArray.sort(() => Math.random() - 0.5);
    }

    useEffect(() => {
        listarLicao();
        var teste = [0, 1, 2, 3];
        shuffleArray(teste);
        setLicaoOp(teste)
    }, []);

    const handleRes = (value) => {
        setRes(value);
    };


    return (
        <>
            {licao.map(atividade => (
                <div key={atividade.id_atividade}>
                    <div className={styles.Img}>
                        <Center>
                            <Image src={`../../images/atividades/${atividade.licao.atividade1.imagem}`} h="300px" w="60%" />
                        </Center>
                    </div>
                    <div className={styles.Txt}>
                        <Center>
                            <Text>{atividade.licao.atividade1.texto}</Text>
                        </Center>
                    </div>
                    <div className={styles.Op}>
                        {atividade.licao.atividade1.res_escrita == 0 ?
                            <>
                                <Center>
                                    <RadioGroup onChange={handleRes}>
                                        <Stack direction="row">
                                            <Radio value={atividade.licao.atividade1.options[licaoOp[0]]}>{atividade.licao.atividade1.options[licaoOp[0]]}</Radio>
                                            <Radio value={atividade.licao.atividade1.options[licaoOp[1]]}>{atividade.licao.atividade1.options[licaoOp[1]]}</Radio>
                                            <Radio value={atividade.licao.atividade1.options[licaoOp[2]]}>{atividade.licao.atividade1.options[licaoOp[2]]}</Radio>
                                            <Radio value={atividade.licao.atividade1.options[licaoOp[3]]}>{atividade.licao.atividade1.options[licaoOp[3]]}</Radio>
                                        </Stack>
                                    </RadioGroup>
                                </Center>
                            </>
                            :
                            <>
                                <Textarea placeholder="Digite sua resposta" />
                            </>
                        }
                    </div>
                    <Box align='right' marginRight="10" p='5' className={styles.Button}>
                        <Button colorScheme="teal" size="lg" onClick ={handleNext}>
                            Proximo
                        </Button>
                    </Box>
                </div>
            ))}
        </>
    )
}

export default Licao1;