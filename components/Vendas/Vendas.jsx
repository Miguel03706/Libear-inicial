import React, { useEffect, useState, useCallback } from 'react'
import { Grid } from "@chakra-ui/react"
import ListarCompras from "./Components/ListarCompras";
import styles from "./vendas.module.scss";

export default function Vendas() {
    return (
        <>
            <Grid
                p="5%"
                h="auto"
                autoRows
                templateColumns="repeat(4, 1fr)"
                gap={4}
            >
                <ListarCompras />
            </Grid>

        </>
    )
}

