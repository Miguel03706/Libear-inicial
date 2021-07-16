import React, { useEffect, useState, useCallback } from 'react';
import axios from "axios";
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
    Select, Input, Button
} from "@chakra-ui/react";
import styles from "./criarAtividade.module.scss";

function criarAtividade() {
    const [atividades, setAtividades] = useState([]);
    const [option, setOption] = useState(true);
    const [option2, setOption2] = useState(true);
    const [option3, setOption3] = useState(true);
    const [option4, setOption4] = useState(true);
    const [option5, setOption5] = useState(true);
    const [option6, setOption6] = useState(true);
    const [option7, setOption7] = useState(true);
    const [option8, setOption8] = useState(true);
    const [option9, setOption9] = useState(true);
    const [option10, setOption10] = useState(true);

    


    async function registrarDados() {
        const res = await axios.get('http://localhost/api/admin/atividades.php');
        setAtividades(res.data.result);
    }
    useEffect(() => {
        registrarDados();
    }, []);


    const formik = useFormik({
        initialValues: {
            imagem_inicio: '',
            titulo: '',
            img_atividade1: '',
            img_atividade2: '',
            img_atividade3: '',
            img_atividade4: '',
            img_atividade5: '',
            img_atividade6: '',
            img_atividade7: '',
            img_atividade8: '',
            img_atividade9: '',
            img_atividade10: '',
            licao1: '',
            licao2: '',
            licao3: '',
            licao4: '',
            licao5: '',
            licao6: '',
            licao7: '',
            licao8: '',
            licao9: '',
            licao10: '',
            res_op1: '',
            res_op2: '',
            res_op3: '',
            res_op4: '',
            res_op5: '',
            res_op6: '',
            res_op7: '',
            res_op8: '',
            res_op9: '',
            res_op10: '',
            res_escrita1: '',
            res_escrita2: '',
            res_escrita3: '',
            res_escrita4: '',
            res_escrita5: '',
            res_escrita6: '',
            res_escrita7: '',
            res_escrita8: '',
            res_escrita9: '',
            res_escrita10: '',
            op_1: '',
            op_2: '',
            op_3: '',
            op_4: '',
            op_5: '',
            op_6: '',
            op_7: '',
            op_8: '',
            op_9: '',
            op_10: '',
            op_11: '',
            op_12: '',
            op_13: '',
            op_14: '',
            op_15: '',
            op_16: '',
            op_17: '',
            op_18: '',
            op_19: '',
            op_20: '',
            op_21: '',
            op_22: '',
            op_23: '',
            op_24: '',
            op_25: '',
            op_26: '',
            op_27: '',
            op_28: '',
            op_29: '',
            op_30: '',
            op_31: '',
            op_32: '',
            op_33: '',
            op_34: '',
            op_35: '',
            op_36: '',
            op_37: '',
            op_38: '',
            op_39: '',
            op_40: '',  
        },
        validationSchema: yup.object({
            titulo: yup.string()
        }),
        validateOnChange: false,
        validateOnBlur: false
    });
    
    const handleOp = useCallback(() => {
        if (option == true) {
            console.log(option);
        } else {
            setOption(true);
        }
    });
    const handleWrite = useCallback(() => {
        if (option == false) {
            console.log(option);
        } else {
            setOption(false);
        }
    });

    const handleOp2 = useCallback(() => {
        if (option2 == true) {
            console.log(option2);
        } else {
            setOption2(true);
        }
    });
    const handleWrite2 = useCallback(() => {
        if (option2 == false) {
            console.log(option2);
        } else {
            setOption2(false);
        }
    });

    const handleOp3 = useCallback(() => {
        if (option3 == true) {
            console.log(option3);
        } else {
            setOption3(true);
        }
    });
    const handleWrite3 = useCallback(() => {
        if (option3 == false) {
            console.log(option3);
        } else {
            setOption3(false);
        }
    });

    const handleOp4 = useCallback(() => {
        if (option4 == true) {
            console.log(option4);
        } else {
            setOption4(true);
        }
    });
    const handleWrite4 = useCallback(() => {
        if (option4 == false) {
            console.log(option4);
        } else {
            setOption4(false);
        }
    });

    const handleOp5 = useCallback(() => {
        if (option5 == true) {
            console.log(option5);
        } else {
            setOption5(true);
        }
    });
    const handleWrite5 = useCallback(() => {
        if (option5 == false) {
            console.log(option5);
        } else {
            setOption5(false);
        }
    });
    
    const handleOp6 = useCallback(() => {
        if (option6 == true) {
            console.log(option6);
        } else {
            setOption6(true);
        }
    });
    const handleWrite6 = useCallback(() => {
        if (option6 == false) {
            console.log(option6);
        } else {
            setOption6(false);
        }
    });

    const handleOp7 = useCallback(() => {
        if (option7 == true) {
            console.log(option7);
        } else {
            setOption7(true);
        }
    });
    const handleWrite7 = useCallback(() => {
        if (option7 == false) {
            console.log(option7);
        } else {
            setOption7(false);
        }
    });

    const handleOp8 = useCallback(() => {
        if (option8 == true) {
            console.log(option8);
        } else {
            setOption8(true);
        }
    });
    const handleWrite8 = useCallback(() => {
        if (option8 == false) {
            console.log(option8);
        } else {
            setOption8(false);
        }
    });

    const handleOp9 = useCallback(() => {
        if (option9 == true) {
            console.log(option9);
        } else {
            setOption9(true);
        }
    });
    const handleWrite9 = useCallback(() => {
        if (option9 == false) {
            console.log(option9);
        } else {
            setOption9(false);
        }
    });

    const handleOp10 = useCallback(() => {
        if (option10 == true) {
            console.log(option10);
        } else {
            setOption10(true);
        }
    });
    const handleWrite10 = useCallback(() => {
        if (option10 == false) {
            console.log(option10);
        } else {
            setOption10(false);
        }
    });

    const handleCreateActivity = useCallback(evt => {
        evt.preventDefault();
    })

    return (
        <>
            <form>
                {/*------------------ atividade 1 ---------------------------------*/}
                <p>
                    <label htmlFor="foto_inicio">Foto de inicio: </label>
                    <input type="file" className="foto_inicio" {...formik.getFieldProps('imagem_inicio')}></input>
                </p>
                <p>
                    <label htmlFor="titulo">Titulo da atividade: </label>
                    <Input size="md" placeholder="Insira o titulo" className="titulo" {...formik.getFieldProps('titulo')} />
                </p>
                <p>
                    <label htmlFor="img1">Imagem/Gif da atividade 1: </label>
                    <input type="file" className="img1" {...formik.getFieldProps('img_atividade1')}></input>
                </p>
                <p>
                    <label htmlFor="l1">Lição 1: </label>
                    <Input size="md" placeholder="Insira a primeira lição" className="l1" {...formik.getFieldProps('licao1')} />
                </p>
                <p>
                    <input type="radio" className="res" {...formik.getFieldProps('res_op1')} value={1} onClick={handleOp} />
                    <label htmlFor="res"> Resposta com opções </label>

                    <input type="radio" className="res2"{...formik.getFieldProps('res_op1')} value={0} onClick={handleWrite} />
                    <label htmlFor="res_op"> Resposta escrita </label>
                </p>
                <p>
                    <label htmlFor="op">Resosta escrita correta: </label>
                    <Input size="md" placeholder="Resposta correta correta" className={styles.op} disabled={option == false ? false : true}{...formik.getFieldProps('res_escrita1')} />
                </p>
                <p>
                    <label htmlFor="op">Opções: </label>
                    <Input size="md" placeholder="Opção correta" className={styles.op} {...formik.getFieldProps('op_1')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 2" className={styles.op} {...formik.getFieldProps('op_2')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 3" className={styles.op} {...formik.getFieldProps('op_3')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 4" className={styles.op} {...formik.getFieldProps('op_4')} disabled={option == false ? true : false} />
                </p>
                {/*------------------ atividade 2 ---------------------------------*/}
                <p>
                    <label htmlFor="img2">Imagem/Gif da atividade 2: </label>
                    <input type="file" className="img2" {...formik.getFieldProps('img_atividade2')}></input>
                </p>
                <p>
                    <label htmlFor="l2">Lição 2: </label>
                    <Input size="md" placeholder="Insira a primeira lição" className="l2" {...formik.getFieldProps('licao2')} />
                </p>
                <p>
                    <input type="radio" className="res" {...formik.getFieldProps('res_op2')} value={1} onClick={handleOp2} />
                    <label htmlFor="res"> Resposta com opções </label>

                    <input type="radio" className="res2"{...formik.getFieldProps('res_op2')} value={0} onClick={handleWrite2} />
                    <label htmlFor="res_op"> Resposta escrita </label>
                </p>
                <p>
                    <label htmlFor="op">Resosta escrita correta: </label>
                    <Input size="md" placeholder="Resposta correta correta" className={styles.op} disabled={option2 == false ? false : true}{...formik.getFieldProps('res_escrita2')} />
                </p>
                <p>
                    <label htmlFor="op">Opções: </label>
                    <Input size="md" placeholder="Opção correta" className={styles.op} {...formik.getFieldProps('op_5')} disabled={option2 == false ? true : false} />
                    <Input size="md" placeholder="Opção 2" className={styles.op} {...formik.getFieldProps('op_6')} disabled={option2 == false ? true : false} />
                    <Input size="md" placeholder="Opção 3" className={styles.op} {...formik.getFieldProps('op_7')} disabled={option2 == false ? true : false} />
                    <Input size="md" placeholder="Opção 4" className={styles.op} {...formik.getFieldProps('op_8')} disabled={option2 == false ? true : false} />
                </p>
                {/*------------------ atividade 3 ---------------------------------*/}
                <p>
                    <label htmlFor="img3">Imagem/Gif da atividade 3: </label>
                    <input type="file" className="img3" {...formik.getFieldProps('img_atividade3')}></input>
                </p>
                <p>
                    <label htmlFor="l3">Lição 3: </label>
                    <Input size="md" placeholder="Insira a primeira lição" className="l3" {...formik.getFieldProps('licao3')} />
                </p>
                <p>
                    <input type="radio" className="res" {...formik.getFieldProps('res_op3')} value={1} onClick={handleOp3} />
                    <label htmlFor="res"> Resposta com opções </label>

                    <input type="radio" className="res2"{...formik.getFieldProps('res_op3')} value={0} onClick={handleWrite3} />
                    <label htmlFor="res_op"> Resposta escrita </label>
                </p>
                <p>
                    <label htmlFor="op">Resosta escrita correta: </label>
                    <Input size="md" placeholder="Resposta correta correta" className={styles.op} disabled={option3 == false ? false : true}{...formik.getFieldProps('res_escrita3')} />
                </p>
                <p>
                    <label htmlFor="op">Opções: </label>
                    <Input size="md" placeholder="Opção correta" className={styles.op} {...formik.getFieldProps('op_9')} disabled={option3 == false ? true : false} />
                    <Input size="md" placeholder="Opção 2" className={styles.op} {...formik.getFieldProps('op_10')} disabled={option3 == false ? true : false} />
                    <Input size="md" placeholder="Opção 3" className={styles.op} {...formik.getFieldProps('op_11')} disabled={option3 == false ? true : false} />
                    <Input size="md" placeholder="Opção 4" className={styles.op} {...formik.getFieldProps('op_12')} disabled={option3 == false ? true : false} />
                </p>
                {/*------------------ atividade 4 ---------------------------------*/}
                <p>
                    <label htmlFor="img4">Imagem/Gif da atividade 4: </label>
                    <input type="file" className="img1" {...formik.getFieldProps('img_atividade4')}></input>
                </p>
                <p>
                    <label htmlFor="l1">Lição 4: </label>
                    <Input size="md" placeholder="Insira a primeira lição" className="l4" {...formik.getFieldProps('licao4')} />
                </p>
                <p>
                    <input type="radio" className="res" {...formik.getFieldProps('res_op4')} value={1} onClick={handleOp4} />
                    <label htmlFor="res"> Resposta com opções </label>

                    <input type="radio" className="res2"{...formik.getFieldProps('res_op4')} value={0} onClick={handleWrite4} />
                    <label htmlFor="res_op"> Resposta escrita </label>
                </p>
                <p>
                    <label htmlFor="op">Resosta escrita correta: </label>
                    <Input size="md" placeholder="Resposta correta correta" className={styles.op} disabled={option4 == false ? false : true}{...formik.getFieldProps('res_escrita4')} />
                </p>
                <p>5
                    <label htmlFor="op">Opções: </label>
                    <Input size="md" placeholder="Opção correta" className={styles.op} {...formik.getFieldProps('op_13')} disabled={option4 == false ? true : false} />
                    <Input size="md" placeholder="Opção 2" className={styles.op} {...formik.getFieldProps('op_14')} disabled={option4 == false ? true : false} />
                    <Input size="md" placeholder="Opção 3" className={styles.op} {...formik.getFieldProps('op_15')} disabled={option4 == false ? true : false} />
                    <Input size="md" placeholder="Opção 4" className={styles.op} {...formik.getFieldProps('op_16')} disabled={option4 == false ? true : false} />
                </p>
                {/*------------------ atividade 5 ---------------------------------*/}
                <p>
                    <label htmlFor="img1">Imagem/Gif da atividade 5: </label>
                    <input type="file" className="img1" {...formik.getFieldProps('img_atividade5')}></input>
                </p>
                <p>
                    <label htmlFor="l1">Lição 5: </label>
                    <Input size="md" placeholder="Insira a primeira lição" className="l5" {...formik.getFieldProps('licao5')} />
                </p>
                <p>
                    <input type="radio" className="res" {...formik.getFieldProps('res_op5')} value={1} onClick={handleOp5} />
                    <label htmlFor="res"> Resposta com opções </label>

                    <input type="radio" className="res2"{...formik.getFieldProps('res_op5')} value={0} onClick={handleWrite5} />
                    <label htmlFor="res_op"> Resposta escrita </label>
                </p>
                <p>6
                    <label htmlFor="op">Resosta escrita correta: </label>
                    <Input size="md" placeholder="Resposta correta correta" className={styles.op} disabled={option5 == false ? false : true}{...formik.getFieldProps('res_escrita5')} />
                </p>
                <p>
                    <label htmlFor="op">Opções: </label>
                    <Input size="md" placeholder="Opção correta" className={styles.op} {...formik.getFieldProps('op_17')} disabled={option5 == false ? true : false} />
                    <Input size="md" placeholder="Opção 2" className={styles.op} {...formik.getFieldProps('op_18')} disabled={option5 == false ? true : false} />
                    <Input size="md" placeholder="Opção 3" className={styles.op} {...formik.getFieldProps('op_19')} disabled={option5 == false ? true : false} />
                    <Input size="md" placeholder="Opção 4" className={styles.op} {...formik.getFieldProps('op_20')} disabled={option5 == false ? true : false} />
                </p>
                {/*------------------ atividade 6 ---------------------------------*/}
                <p>
                    <label htmlFor="img1">Imagem/Gif da atividade 6: </label>
                    <input type="file" className="img1" {...formik.getFieldProps('img_atividade6')}></input>
                </p>
                <p>
                    <label htmlFor="l1">Lição 6: </label>
                    <Input size="md" placeholder="Insira a primeira lição" className="l6" {...formik.getFieldProps('licao6')} />
                </p>
                <p>
                    <input type="radio" className="res" {...formik.getFieldProps('res_op6')} value={1} onClick={handleOp6} />
                    <label htmlFor="res"> Resposta com opções </label>

                    <input type="radio" className="res2"{...formik.getFieldProps('res_op6')} value={0} onClick={handleWrite6} />
                    <label htmlFor="res_op"> Resposta escrita </label>
                </p>
                <p>
                    <label htmlFor="op">Resosta escrita correta: </label>
                    <Input size="md" placeholder="Resposta correta correta" className={styles.op} disabled={option6 == false ? false : true}{...formik.getFieldProps('res_escrita6')} />
                </p>
                <p>
                    <label htmlFor="op">Opções: </label>
                    <Input size="md" placeholder="Opção correta" className={styles.op} {...formik.getFieldProps('op_21')} disabled={option6 == false ? true : false} />
                    <Input size="md" placeholder="Opção 2" className={styles.op} {...formik.getFieldProps('op_22')} disabled={option6 == false ? true : false} />
                    <Input size="md" placeholder="Opção 3" className={styles.op} {...formik.getFieldProps('op_23')} disabled={option6 == false ? true : false} />
                    <Input size="md" placeholder="Opção 4" className={styles.op} {...formik.getFieldProps('op_24')} disabled={option6 == false ? true : false} />
                </p>
                {/*------------------ atividade 7 ---------------------------------*/}
                <p>
                    <label htmlFor="img1">Imagem/Gif da atividade 7: </label>
                    <input type="file" className="img1" {...formik.getFieldProps('img_atividade7')}></input>
                </p>
                <p>
                    <label htmlFor="l1">Lição 7: </label>
                    <Input size="md" placeholder="Insira a primeira lição" className="l7" {...formik.getFieldProps('licao7')} />
                </p>
                <p>
                    <input type="radio" className="res" {...formik.getFieldProps('res_op7')} value={1} onClick={handleOp7} />
                    <label htmlFor="res"> Resposta com opções </label>

                    <input type="radio" className="res2"{...formik.getFieldProps('res_op7')} value={0} onClick={handleWrite7} />
                    <label htmlFor="res_op"> Resposta escrita </label>
                </p>8
                <p>
                    <label htmlFor="op">Resosta escrita correta: </label>
                    <Input size="md" placeholder="Resposta correta correta" className={styles.op} disabled={option7 == false ? false : true}{...formik.getFieldProps('res_escrita7')} />
                </p>
                <p>
                    <label htmlFor="op">Opções: </label>
                    <Input size="md" placeholder="Opção correta" className={styles.op} {...formik.getFieldProps('op_25')} disabled={option7 == false ? true : false} />
                    <Input size="md" placeholder="Opção 2" className={styles.op} {...formik.getFieldProps('op_26')} disabled={option7 == false ? true : false} />
                    <Input size="md" placeholder="Opção 3" className={styles.op} {...formik.getFieldProps('op_27')} disabled={option7 == false ? true : false} />
                    <Input size="md" placeholder="Opção 4" className={styles.op} {...formik.getFieldProps('op_28')} disabled={option7 == false ? true : false} />
                </p>
                {/*------------------ atividade 8 ---------------------------------*/}
                <p>
                    <label htmlFor="img1">Imagem/Gif da atividade 8: </label>
                    <input type="file" className="img1" {...formik.getFieldProps('img_atividade8')}></input>
                </p>
                <p>
                    <label htmlFor="l1">Lição 8: </label>
                    <Input size="md" placeholder="Insira a primeira lição" className="l8" {...formik.getFieldProps('licao8')} />
                </p>
                <p>
                    <input type="radio" className="res" {...formik.getFieldProps('res_op8')} value={1} onClick={handleOp8} />
                    <label htmlFor="res"> Resposta com opções </label>

                    <input type="radio" className="res2"{...formik.getFieldProps('res_op8')} value={0} onClick={handleWrite8} />
                    <label htmlFor="res_op"> Resposta escrita </label>
                </p>
                <p>
                    <label htmlFor="op">Resosta escrita correta: </label>
                    <Input size="md" placeholder="Resposta correta correta" className={styles.op} disabled={option8 == false ? false : true}{...formik.getFieldProps('res_escrita8')} />
                </p>
                <p>
                    <label htmlFor="op">Opções: </label>
                    <Input size="md" placeholder="Opção correta" className={styles.op} {...formik.getFieldProps('op_29')} disabled={option8 == false ? true : false} />
                    <Input size="md" placeholder="Opção 2" className={styles.op} {...formik.getFieldProps('op_30')} disabled={option8 == false ? true : false} />
                    <Input size="md" placeholder="Opção 3" className={styles.op} {...formik.getFieldProps('op_31')} disabled={option8 == false ? true : false} />
                    <Input size="md" placeholder="Opção 4" className={styles.op} {...formik.getFieldProps('op_32')} disabled={option8 == false ? true : false} />
                </p>
                {/*------------------ atividade 9 ---------------------------------*/}
                <p>
                    <label htmlFor="img1">Imagem/Gif da atividade 9: </label>
                    <input type="file" className="img1" {...formik.getFieldProps('img_atividade9')}></input>
                </p>
                <p>
                    <label htmlFor="l1">Lição 9: </label>
                    <Input size="md" placeholder="Insira a primeira lição" className="l9" {...formik.getFieldProps('licao9')} />
                </p>
                <p>
                    <input type="radio" className="res" {...formik.getFieldProps('res_op9')} value={1} onClick={handleOp9} />
                    <label htmlFor="res"> Resposta com opções </label>

                    <input type="radio" className="res2"{...formik.getFieldProps('res_op9')} value={0} onClick={handleWrite9} />
                    <label htmlFor="res_op"> Resposta escrita </label>
                </p>
                <p>
                    <label htmlFor="op">Resosta escrita correta: </label>
                    <Input size="md" placeholder="Resposta correta correta" className={styles.op} disabled={option9 == false ? false : true}{...formik.getFieldProps('res_escrita9')} />
                </p>
                <p>
                    <label htmlFor="op">Opções: </label>
                    <Input size="md" placeholder="Opção correta" className={styles.op} {...formik.getFieldProps('op_33')} disabled={option9 == false ? true : false} />
                    <Input size="md" placeholder="Opção 2" className={styles.op} {...formik.getFieldProps('op_34')} disabled={option9 == false ? true : false} />
                    <Input size="md" placeholder="Opção 3" className={styles.op} {...formik.getFieldProps('op_35')} disabled={option9 == false ? true : false} />
                    <Input size="md" placeholder="Opção 4" className={styles.op} {...formik.getFieldProps('op_36')} disabled={option9 == false ? true : false} />
                </p>
                {/*------------------ atividade 10 ---------------------------------*/}
                <p>
                    <label htmlFor="img1">Imagem/Gif da atividade 10: </label>
                    <input type="file" className="img10" {...formik.getFieldProps('img_atividade10')}></input>
                </p>
                <p>
                    <label htmlFor="l1">Lição 10: </label>
                    <Input size="md" placeholder="Insira a primeira lição" className="l10" {...formik.getFieldProps('licao10')} />
                </p>
                <p>
                    <input type="radio" className="res" {...formik.getFieldProps('res_op10')} value={1} onClick={handleOp10} />
                    <label htmlFor="res"> Resposta com opções </label>

                    <input type="radio" className="res2"{...formik.getFieldProps('res_op10')} value={0} onClick={handleWrite10} />
                    <label htmlFor="res_op"> Resposta escrita </label>
                </p>
                <p>
                    <label htmlFor="op">Resosta escrita correta: </label>
                    <Input size="md" placeholder="Resposta correta correta" className={styles.op} disabled={option10 == false ? false : true}{...formik.getFieldProps('res_escrita9')} />
                </p>
                <p>
                    <label htmlFor="op">Opções: </label>
                    <Input size="md" placeholder="Opção correta" className={styles.op} {...formik.getFieldProps('op_37')} disabled={option10 == false ? true : false} />
                    <Input size="md" placeholder="Opção 2" className={styles.op} {...formik.getFieldProps('op_38')} disabled={option10 == false ? true : false} />
                    <Input size="md" placeholder="Opção 3" className={styles.op} {...formik.getFieldProps('op_39')} disabled={option10 == false ? true : false} />
                    <Input size="md" placeholder="Opção 4" className={styles.op} {...formik.getFieldProps('op_40')} disabled={option10 == false ? true : false} />
                </p>
                <p><Button onClick={handleCreateActivity} m="5px">Criar atividade</Button></p>
            </form>
        </>
    )
}

export default criarAtividade;