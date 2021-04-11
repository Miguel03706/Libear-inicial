import React from "react"
import Footer from "../components/footer"
import { AppProps } from "next/app"
import { ChakraProvider, CSSReset, theme, ColorModeScript } from "@chakra-ui/react"
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="light"/>
        <CSSReset />
        <Component {...pageProps} />
        <Footer/>
    </ChakraProvider>
    
  )
}

/*

   
    <div className="mobile-hide">
    </div>
    
    <div className="mobile">
        <div className="desktop-hide">
        </div>
    </div>

*/

export default MyApp
