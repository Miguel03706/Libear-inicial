import React, { useEffect, useState, useCallback } from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from "axios";
import {
    Image, Center, Button, Input, useToast, Skeleton, Box, Grid, GridItem, VisuallyHidden, Text, InputGroup, InputRightElement
} from "@chakra-ui/react";
import styles from "../UserConfig.module.scss";

function Inputs() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            userName: '',
        },
        validationSchema: yup.object({
            email: yup.string()
                .required('Você precisa digitar seu email.')
                .email("preencha com um email válido"),
            password: yup.string()
                .required('Você precisa digitar sua senha.')
                .min(8, "a senha deve ter no minimo 8 caracteres"),
            userName: yup.string()
        }),
        validateOnChange: false, //valida a acada caractere adicionado
        validateOnBlur: false, // valida ao sair do form(ou clicar fora do input)
    });


    return (
        <>
            <Center>
                <p>
                    <InputGroup>
                        <Input
                            variant="flushed"
                            type="text"
                            {...formik.getFieldProps("userName")}
                            className={styles.password}
                            textAlign="center"
                            marginLeft="2rem"
                        />

                        <InputRightElement >
                            <Image src={`icons/uteis/caneta.webp`} h="1rem" />
                        </InputRightElement>
                    </InputGroup>
                </p>
            </Center>

        </>
    )
}

export default Inputs;