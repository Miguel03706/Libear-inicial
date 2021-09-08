import React, {UseEffect, UseState} from "react";
import { GetServerSideProps } from 'next';
import axios from "axios";
import styles from "./explicacao.module.scss";

export async function getServerSideProps(ctx) {
    const slug = ctx.params.explicacao;
    return {
        props: {
            slug
        }
    }
}


function Explicacao({ slug }){

    return( 
        <>
        {slug}
        </>
    )


}

export default Explicacao;

