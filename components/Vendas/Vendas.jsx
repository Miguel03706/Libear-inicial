import React, { useEffect, useState, useCallback } from 'react'
import { Grid, Center } from "@chakra-ui/react"
import ListarCompras from "./Components/ListarCompras";
import styles from "./vendas.module.scss";
import { FaStaylinked } from 'react-icons/fa';

export default function Vendas() {
    const [money, setMoney] = useState(0)

    const handleMoney = (money) => {
        setMoney(money);
    }

    return (
        <>
            <Center>Seu dinheiro: {money}</Center>

            <Grid
                p="5%"
                h="auto"
                autoRows
                templateColumns="repeat(4, 1fr)"
                gap={4}
            >
                <ListarCompras money={handleMoney} />
            </Grid>
            <div class={styles.space}></div>
        </>
    )
}

