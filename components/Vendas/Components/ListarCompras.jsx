import React, { useEffect, useState, useCallback } from 'react';
import DB from "../../../pages/api/MySQL";
import { Text, Image, Center, Flex, Square, Box, Button, GridItem } from "@chakra-ui/react";
import styles from "../vendas.module.scss";

export default function ListarCompras() {
    const [compras, setCompras] = useState([]);
    const [comprar, setComprar] = useState([]);

    useEffect(() => {
        DB.listarCompras().then(setCompras);
    }, []);
    useEffect(async() => {
        await DB.comprarItens(comprar);
        DB.listarCompras().then(setCompras);

    }, [comprar])
    return (
        <>
            {compras.map(itens => {
                return (
                    <div key={itens.id_produto}>
                        <Box w="auto" bg="green.500" border="1px solid black">
                            <Center>
                                <Text>{itens.nome}</Text>
                            </Center>
                        </Box>
                        <Box w="auto" border="1px solid black">
                            <Center><Image src={`../letras/${itens.img}.png`} h="100px" w="auto"/></Center>
                            <Center><Text>{itens.descricao}</Text></Center>
                        </Box>
                        <Square bg="blue.500" w="auto" border="1px solid black" p="5px">
                            {
                                itens.compras[`${itens.id_produto}`].buy == 0 ?
                                    <Button colorScheme="teal" onClick={(e) => setComprar(itens.id_produto)}>Comprar por: {itens.preco}</Button>
                                    :
                                    <>
                                        <Button colorScheme="teal" isDisabled>Já possui</Button>
                                    </>
                            }
                        </Square>
                    </div>
                )
            })}
        </>
    )
}
