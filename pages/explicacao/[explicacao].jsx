import React, { useEffect, useState } from "react";
import { GetServerSideProps } from 'next';
import axios from "axios";
import { Button, Flex, Spacer, Center, Text, SimpleGrid, Box, Skeleton, Grid, GridItem } from "@chakra-ui/react"
import Header from "../../components/header"
import Orientacao from "../../components/Orientacao"
import styles from "./explicacao.module.scss";


export async function getServerSideProps(ctx) {
    const slug = ctx.params.explicacao;
    return {
        props: {
            slug
        }
    }
}

function Explicacao({ slug }) {

    return (
        <>
            <Header inicio={false} missoes={false} loja={false} config={false} />

            <SimpleGrid columns={2} spacing={5} m="10">
                <Box height="auto" width="100%">
                    <Orientacao slug={slug} />
                </Box>
                <Box height="auto" width="90%">
                    <Skeleton height="400px" />
                </Box>
            </SimpleGrid>
            {/* <Grid
                h="200px"
                m="10px"
                templateColumns="repeat(3, 1fr)"
                gap={4}
            >
                <GridItem rowSpan={1} colSpan={2} bg="tomato" />
                <GridItem colSpan={1} bg="papayawhip" />
            </Grid> */}
        </>
    )
}

export default Explicacao;

