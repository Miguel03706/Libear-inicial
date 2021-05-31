import { useState } from 'react';
import Link from "next/link"
import { Image, Button } from "@chakra-ui/react";
import styles from "./header.module.scss";


//const [complete, setComplete] = useState("0");
//const [chama, setChama] = useState("images/chama-cinza.webp");
export interface HeaderProps{
    color: boolean
}

//<Image size="64px" src="images/foto-perfil.webp" alt="foto de perfil" />
export default function Header({inicio, missoes, loja, config}) {

    const routes = [
        { path: "/inicio", label: "Inicio", img: "icons/inicio.webp", color: inicio },
        { path: "/missoes", label: "Missões", img: "icons/pergaminho.webp", color: missoes },
        { path: "/loja", label: "Loja", img: "icons/loja.webp", color: loja },
        { path: "/configurar", label: "Configurações", img: "icons/engrenagens.webp", color: config },
        { path: "", label: '0', img: "icons/chama-cinza.webp" },
        { path: "/perfil", label: "", img: "icons/perfil.webp" }
    ]

    return (
        <>
            <div className="mobile-hide">
                <header className={styles.header}>
                    <div className={styles.wrapper}>
                        <nav>
                            <ul>
                                {routes.map(({ path, label, img, color }, idx) => (
                                    <li key={idx}>
                                        <Link href={path}>
                                            <Button colorScheme="teal" variant="link">
                                                {color ? 
                                                <Image size="64px" src={img} className={styles.imgSelect}/> : <Image size="64px" src={img} />}
                                                {color ? <a className={styles.imgSelect}><div className="label_header">{label}</div></a> : <a><div className="label_header">{label}</div></a>}
                                            </Button>
                                        </Link>
                                        
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>

            <div className="mobile">
                <div className="desktop-hide">
                    <header className={styles.headerMobile}>
                        <div className={styles.wrapperMobile}>
                            <nav>
                             <h2>Libear</h2>
                            </nav>
                            <Image size="64px" src="icons/logo_urso.webp"/>
                        </div>
                    </header>
                </div>
            </div>
        </>
    );
}


