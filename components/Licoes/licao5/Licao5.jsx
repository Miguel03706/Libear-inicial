import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Center, Image, Text, Button, Box, Textarea, Stack, RadioGroup, Radio, useToast, HStack, useRadioGroup } from "@chakra-ui/react";
// import RadioCard from "../../RadioCard";
import { useFormik } from 'formik';
import * as yup from 'yup';
import styles from "../licoes.module.scss";

function Licao5({ slug, handleNext }) {
    const [licao, setLicao] = useState([]);
    const [licaoOp, setLicaoOp] = useState([]);
    const [res, setRes] = useState('');
    const [verifica, setVerifica] = useState('');
    const toast = useToast()

    const formik = useFormik({
        initialValues: {
            resultado: '',
        },
        validationSchema: yup.object({
            resultado: yup.string(),
        }),
        validateOnChange: false, //valida a acada caractere adicionado
    });

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
        setLicaoOp(teste);
    }, []);

    useEffect(() => {
        licao.map(atividade => (setVerifica(atividade.licao.atividade5.res_correta)));
    }, [licao]);

    const handleVerifica = useCallback((evt) => {
        evt.preventDefault();
        if (res.toLowerCase() == verifica.toLowerCase() || formik.values.resultado.toLowerCase().trim() == verifica.toLowerCase()) {
            toast({
                title: "Sucesso",
                description: "Você acertou a questão",
                status: "success",
                duration: 1000,
                isClosable: false,

            })
            handleNext()
        } else if (formik.values.resultado !== verifica && formik.values.resultado !== '') {
            toast({
                title: "Erro",
                description: "Você errou a questão, verifique se está escrito corretamente",
                status: "error",
                duration: 2000,
                isClosable: false,
            })
        } else
            toast({
                title: "Erro",
                description: "Você errou a questão",
                status: "error",
                duration: 1000,
                isClosable: false,
            })

    }, [res, verifica, handleNext, formik]);

    return (
        <>
            {licao.map(atividade => {
                return (
                    <div key={atividade.id_atividade}>
                        <div className={styles.Img}>
                            <Center>
                                <Image src={`../../images/atividades/${atividade.licao.atividade5.imagem}`} h="300px" w="auto" p="10px" />
                            </Center>
                        </div>
                        <div className={styles.Txt}>
                            <Center>
                                <Text>{atividade.licao.atividade5.texto}</Text>
                            </Center>
                        </div>
                        <div className={styles.Op}>
                            {atividade.licao.atividade5.res_escrita == 0 ?
                                <>
                                    <Center>
                                        <RadioGroup className={styles.RadioGroup}>
                                            <Stack direction="row">
                                                {/* <Box as="button" className={styles.Boxinput1}  maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" >
                                                    <label className={styles.Text}>aaa</label> */}
                                                {/* </Box> */}
                                                <Radio value="1" onChange={(e) => setRes(atividade.licao.atividade5.options[licaoOp[0]])} className={styles.Input1}>{atividade.licao.atividade5.options[licaoOp[0]]}</Radio>
                                                <Radio value="2" onChange={(e) => setRes(atividade.licao.atividade5.options[licaoOp[1]])}>{atividade.licao.atividade5.options[licaoOp[1]]}</Radio>
                                                <Radio value="3" onChange={(e) => setRes(atividade.licao.atividade5.options[licaoOp[2]])}>{atividade.licao.atividade5.options[licaoOp[2]]}</Radio>
                                                <Radio value="4" onChange={(e) => setRes(atividade.licao.atividade5.options[licaoOp[3]])}>{atividade.licao.atividade5.options[licaoOp[3]]}</Radio>
                                            </Stack>
                                        </RadioGroup>
                                    </Center>
                                </>
                                :
                                <>
                                    <Box className={styles.DivTextArea}>
                                        <form><Textarea placeholder="Digite sua resposta" className={styles.TextArea}
                                            focusBorderColor="#b4b3b3" size="md" {...formik.getFieldProps('resultado')} /></form>
                                    </Box>
                                </>
                            }
                        </div>
                        <Box align='right' marginRight="10" p='5' className={styles.Button}>
                            <Button colorScheme="teal" size="lg" onClick={handleVerifica}>
                                Proximo
                            </Button>
                        </Box>
                    </div>
                )
            })}
        </>
    )
}
export default Licao5;