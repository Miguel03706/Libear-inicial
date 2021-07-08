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
            res_op: '', //boolean
            img_atividade1: '',
            licao_1: '',
            res_1: '',
            op_1: '',
            op_2: '',
            op_3: '',
            op_4: '',

        },
        validationSchema: yup.object({
            titulo: yup.string()
        }),
        validateOnChange: false,
        validateOnBlur: false
    });
    const handleCreateActivity = useCallback(evt => {
        evt.preventDefault();
    })

     const handleOp = useCallback(()=>{
         if(option == true){
            console.log(option);
         }else{
            setOption(true);
         }
    });

    const handleWrite = useCallback(()=>{
        if(option == false){
            console.log(option);
         }else{
            setOption(false);
         }
    });
   

    return (
        <>
            <form>
                {/*------------------ atividade 1 ---------------------------------*/}
                <p>
                    <label htmlFor="foto_inicio">Foto de inicio: </label>
                    <input type="file" className="foto_inicio" {...formik.getFieldProps('imagem_inicio1')}></input>
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
                    <Input size="md" placeholder="Insira a primeira lição" className="l1" {...formik.getFieldProps('licao_1')} />
                </p>
                <p>
                    <input type="radio" className="res" {...formik.getFieldProps('res_op1')} value={1} onClick={handleOp}/>
                    <label htmlFor="res"> Resposta com opções </label>

                    <input type="radio" className="res2"{...formik.getFieldProps('res_op1')} value={0} onClick={handleWrite}/>
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
                    <label htmlFor="l2">Lição 1: </label>
                    <Input size="md" placeholder="Insira a primeira lição" className="l2" {...formik.getFieldProps('licao_1')} />
                </p>
                <p>
                    <input type="radio" className="res" {...formik.getFieldProps('res_op2')} value={1} onClick={handleOp}/>
                    <label htmlFor="res"> Resposta com opções </label>

                    <input type="radio" className="res2"{...formik.getFieldProps('res_op2')} value={0} onClick={handleWrite}/>
                    <label htmlFor="res_op"> Resposta escrita </label>
                </p>
                <p>
                <label htmlFor="op">Resosta escrita correta: </label>
                    <Input size="md" placeholder="Resposta correta correta" className={styles.op} disabled={option == false ? false : true}{...formik.getFieldProps('res_escrita2')} />
                </p>
                <p>
                    <label htmlFor="op">Opções: </label>
                    <Input size="md" placeholder="Opção correta" className={styles.op} {...formik.getFieldProps('op_5')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 2" className={styles.op} {...formik.getFieldProps('op_6')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 3" className={styles.op} {...formik.getFieldProps('op_7')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 4" className={styles.op} {...formik.getFieldProps('op_8')} disabled={option == false ? true : false} />
                </p>
                {/*------------------ atividade 3 ---------------------------------*/}
                <p>
                    <label htmlFor="img3">Imagem/Gif da atividade 3: </label>
                    <input type="file" className="img3" {...formik.getFieldProps('img_atividade3')}></input>
                </p>
                <p>
                    <label htmlFor="l3">Lição 1: </label>
                    <Input size="md" placeholder="Insira a primeira lição" className="l3" {...formik.getFieldProps('licao_1')} />
                </p>
                <p>
                    <input type="radio" className="res" {...formik.getFieldProps('res_op3')} value={1} onClick={handleOp}/>
                    <label htmlFor="res"> Resposta com opções </label>

                    <input type="radio" className="res2"{...formik.getFieldProps('res_op3')} value={0} onClick={handleWrite}/>
                    <label htmlFor="res_op"> Resposta escrita </label>
                </p>
                <p>
                <label htmlFor="op">Resosta escrita correta: </label>
                    <Input size="md" placeholder="Resposta correta correta" className={styles.op} disabled={option == false ? false : true}{...formik.getFieldProps('res_escrita3')} />
                </p>
                <p>
                    <label htmlFor="op">Opções: </label>
                    <Input size="md" placeholder="Opção correta" className={styles.op} {...formik.getFieldProps('op_9')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 2" className={styles.op} {...formik.getFieldProps('op_10')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 3" className={styles.op} {...formik.getFieldProps('op_11')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 4" className={styles.op} {...formik.getFieldProps('op_12')} disabled={option == false ? true : false} />
                </p>
                {/*------------------ atividade 4 ---------------------------------*/}
                <p>
                    <label htmlFor="img4">Imagem/Gif da atividade 4: </label>
                    <input type="file" className="img1" {...formik.getFieldProps('img_atividade4')}></input>
                </p>
                <p>
                    <label htmlFor="l1">Lição 1: </label>
                    <Input size="md" placeholder="Insira a primeira lição" className="l4" {...formik.getFieldProps('licao_1')} />
                </p>
                <p>
                    <input type="radio" className="res" {...formik.getFieldProps('res_op4')} value={1} onClick={handleOp}/>
                    <label htmlFor="res"> Resposta com opções </label>

                    <input type="radio" className="res2"{...formik.getFieldProps('res_op4')} value={0} onClick={handleWrite}/>
                    <label htmlFor="res_op"> Resposta escrita </label>
                </p>
                <p>
                <label htmlFor="op">Resosta escrita correta: </label>
                    <Input size="md" placeholder="Resposta correta correta" className={styles.op} disabled={option == false ? false : true}{...formik.getFieldProps('res_escrita4')} />
                </p>
                <p>
                    <label htmlFor="op">Opções: </label>
                    <Input size="md" placeholder="Opção correta" className={styles.op} {...formik.getFieldProps('op_13')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 2" className={styles.op} {...formik.getFieldProps('op_14')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 3" className={styles.op} {...formik.getFieldProps('op_15')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 4" className={styles.op} {...formik.getFieldProps('op_16')} disabled={option == false ? true : false} />
                </p>
                  {/*------------------ atividade 5 ---------------------------------*/}
                  <p>
                    <label htmlFor="img1">Imagem/Gif da atividade 5: </label>
                    <input type="file" className="img1" {...formik.getFieldProps('img_atividade5')}></input>
                </p>
                <p>
                    <label htmlFor="l1">Lição 1: </label>
                    <Input size="md" placeholder="Insira a primeira lição" className="l5" {...formik.getFieldProps('licao_1')} />
                </p>
                <p>
                    <input type="radio" className="res" {...formik.getFieldProps('res_op5')} value={1} onClick={handleOp}/>
                    <label htmlFor="res"> Resposta com opções </label>

                    <input type="radio" className="res2"{...formik.getFieldProps('res_op5')} value={0} onClick={handleWrite}/>
                    <label htmlFor="res_op"> Resposta escrita </label>
                </p>
                <p>
                <label htmlFor="op">Resosta escrita correta: </label>
                    <Input size="md" placeholder="Resposta correta correta" className={styles.op} disabled={option == false ? false : true}{...formik.getFieldProps('res_escrita5')} />
                </p>
                <p>
                    <label htmlFor="op">Opções: </label>
                    <Input size="md" placeholder="Opção correta" className={styles.op} {...formik.getFieldProps('op_17')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 2" className={styles.op} {...formik.getFieldProps('op_18')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 3" className={styles.op} {...formik.getFieldProps('op_19')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 4" className={styles.op} {...formik.getFieldProps('op_20')} disabled={option == false ? true : false} />
                </p>
                  {/*------------------ atividade 6 ---------------------------------*/}
                  <p>
                    <label htmlFor="img1">Imagem/Gif da atividade 6: </label>
                    <input type="file" className="img1" {...formik.getFieldProps('img_atividade6')}></input>
                </p>
                <p>
                    <label htmlFor="l1">Lição 1: </label>
                    <Input size="md" placeholder="Insira a primeira lição" className="l6" {...formik.getFieldProps('licao_1')} />
                </p>
                <p>
                    <input type="radio" className="res" {...formik.getFieldProps('res_op6')} value={1} onClick={handleOp}/>
                    <label htmlFor="res"> Resposta com opções </label>

                    <input type="radio" className="res2"{...formik.getFieldProps('res_op6')} value={0} onClick={handleWrite}/>
                    <label htmlFor="res_op"> Resposta escrita </label>
                </p>
                <p>
                <label htmlFor="op">Resosta escrita correta: </label>
                    <Input size="md" placeholder="Resposta correta correta" className={styles.op} disabled={option == false ? false : true}{...formik.getFieldProps('res_escrita6')} />
                </p>
                <p>
                    <label htmlFor="op">Opções: </label>
                    <Input size="md" placeholder="Opção correta" className={styles.op} {...formik.getFieldProps('op_21')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 2" className={styles.op} {...formik.getFieldProps('op_22')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 3" className={styles.op} {...formik.getFieldProps('op_23')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 4" className={styles.op} {...formik.getFieldProps('op_24')} disabled={option == false ? true : false} />
                </p>
                  {/*------------------ atividade 7 ---------------------------------*/}
                  <p>
                    <label htmlFor="img1">Imagem/Gif da atividade 7: </label>
                    <input type="file" className="img1" {...formik.getFieldProps('img_atividade7')}></input>
                </p>
                <p>
                    <label htmlFor="l1">Lição 1: </label>
                    <Input size="md" placeholder="Insira a primeira lição" className="l7" {...formik.getFieldProps('licao_1')} />
                </p>
                <p>
                    <input type="radio" className="res" {...formik.getFieldProps('res_op7')} value={1} onClick={handleOp}/>
                    <label htmlFor="res"> Resposta com opções </label>

                    <input type="radio" className="res2"{...formik.getFieldProps('res_op7')} value={0} onClick={handleWrite}/>
                    <label htmlFor="res_op"> Resposta escrita </label>
                </p>
                <p>
                <label htmlFor="op">Resosta escrita correta: </label>
                    <Input size="md" placeholder="Resposta correta correta" className={styles.op} disabled={option == false ? false : true}{...formik.getFieldProps('res_escrita7')} />
                </p>
                <p>
                    <label htmlFor="op">Opções: </label>
                    <Input size="md" placeholder="Opção correta" className={styles.op} {...formik.getFieldProps('op_25')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 2" className={styles.op} {...formik.getFieldProps('op_26')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 3" className={styles.op} {...formik.getFieldProps('op_27')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 4" className={styles.op} {...formik.getFieldProps('op_28')} disabled={option == false ? true : false} />
                </p>
                  {/*------------------ atividade 8 ---------------------------------*/}
                  <p>
                    <label htmlFor="img1">Imagem/Gif da atividade 8: </label>
                    <input type="file" className="img1" {...formik.getFieldProps('img_atividade8')}></input>
                </p>
                <p>
                    <label htmlFor="l1">Lição 1: </label>
                    <Input size="md" placeholder="Insira a primeira lição" className="l8" {...formik.getFieldProps('licao_1')} />
                </p>
                <p>
                    <input type="radio" className="res" {...formik.getFieldProps('res_op8')} value={1} onClick={handleOp}/>
                    <label htmlFor="res"> Resposta com opções </label>

                    <input type="radio" className="res2"{...formik.getFieldProps('res_op8')} value={0} onClick={handleWrite}/>
                    <label htmlFor="res_op"> Resposta escrita </label>
                </p>
                <p>
                <label htmlFor="op">Resosta escrita correta: </label>
                    <Input size="md" placeholder="Resposta correta correta" className={styles.op} disabled={option == false ? false : true}{...formik.getFieldProps('res_escrita8')} />
                </p>
                <p>
                    <label htmlFor="op">Opções: </label>
                    <Input size="md" placeholder="Opção correta" className={styles.op} {...formik.getFieldProps('op_29')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 2" className={styles.op} {...formik.getFieldProps('op_30')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 3" className={styles.op} {...formik.getFieldProps('op_31')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 4" className={styles.op} {...formik.getFieldProps('op_32')} disabled={option == false ? true : false} />
                </p>
                  {/*------------------ atividade 9 ---------------------------------*/}
                  <p>
                    <label htmlFor="img1">Imagem/Gif da atividade 9: </label>
                    <input type="file" className="img1" {...formik.getFieldProps('img_atividade9')}></input>
                </p>
                <p>
                    <label htmlFor="l1">Lição 1: </label>
                    <Input size="md" placeholder="Insira a primeira lição" className="l9" {...formik.getFieldProps('licao_1')} />
                </p>
                <p>
                    <input type="radio" className="res" {...formik.getFieldProps('res_op9')} value={1} onClick={handleOp}/>
                    <label htmlFor="res"> Resposta com opções </label>

                    <input type="radio" className="res2"{...formik.getFieldProps('res_op9')} value={0} onClick={handleWrite}/>
                    <label htmlFor="res_op"> Resposta escrita </label>
                </p>
                <p>
                <label htmlFor="op">Resosta escrita correta: </label>
                    <Input size="md" placeholder="Resposta correta correta" className={styles.op} disabled={option == false ? false : true}{...formik.getFieldProps('res_escrita9')} />
                </p>
                <p>
                    <label htmlFor="op">Opções: </label>
                    <Input size="md" placeholder="Opção correta" className={styles.op} {...formik.getFieldProps('op_33')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 2" className={styles.op} {...formik.getFieldProps('op_34')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 3" className={styles.op} {...formik.getFieldProps('op_35')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 4" className={styles.op} {...formik.getFieldProps('op_36')} disabled={option == false ? true : false} />
                </p>
                {/*------------------ atividade 10 ---------------------------------*/}
                <p>
                    <label htmlFor="img1">Imagem/Gif da atividade 10: </label>
                    <input type="file" className="img10" {...formik.getFieldProps('img_atividade10')}></input>
                </p>
                <p>
                    <label htmlFor="l1">Lição 1: </label>
                    <Input size="md" placeholder="Insira a primeira lição" className="l10" {...formik.getFieldProps('licao_1')} />
                </p>
                <p>
                    <input type="radio" className="res" {...formik.getFieldProps('res_op10')} value={1} onClick={handleOp}/>
                    <label htmlFor="res"> Resposta com opções </label>

                    <input type="radio" className="res2"{...formik.getFieldProps('res_op10')} value={0} onClick={handleWrite}/>
                    <label htmlFor="res_op"> Resposta escrita </label>
                </p>
                <p>
                <label htmlFor="op">Resosta escrita correta: </label>
                    <Input size="md" placeholder="Resposta correta correta" className={styles.op} disabled={option == false ? false : true}{...formik.getFieldProps('res_escrita9')} />
                </p>
                <p>
                    <label htmlFor="op">Opções: </label>
                    <Input size="md" placeholder="Opção correta" className={styles.op} {...formik.getFieldProps('op_37')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 2" className={styles.op} {...formik.getFieldProps('op_38')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 3" className={styles.op} {...formik.getFieldProps('op_39')} disabled={option == false ? true : false} />
                    <Input size="md" placeholder="Opção 4" className={styles.op} {...formik.getFieldProps('op_40')} disabled={option == false ? true : false} />
                </p>
                <p><Button onClick={handleCreateActivity} m="5px">Criar atividade</Button></p>
            </form>
        </>
    )
}

export default criarAtividade;