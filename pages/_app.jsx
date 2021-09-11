import React, { useState, useEffect, useContext } from "react"
import Footer from "../components/footer"
import { ChakraProvider, CSSReset, ColorModeScript } from "@chakra-ui/react"
import AuthProvider from "../components/state/Auth/Provider"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      
      <ChakraProvider>
        <ColorModeScript initialColorMode="light" />
      
        <CSSReset />
        <Component {...pageProps} />
  
        <Footer />
      </ChakraProvider>
    </AuthProvider>
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
