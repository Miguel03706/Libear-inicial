import React, { useState, useEffect } from "react"
import Footer from "../components/footer"
// import Login from "../components/login"
import { AppProps } from "next/app"
import { ChakraProvider, CSSReset, ColorModeScript } from "@chakra-ui/react"
import AuthProvider from "../components/state/Auth/Provider";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  
  // useEffect(() => {
  //   const URL = window.location.href;
  //   if (URL === "http://localhost:3000/" || URL === "http://localhost:3000/entrar" || URL === "http://localhost:3000/cadastrar") {
  //       return null;
  //   }else if(user === null){
  //     return(
  //       <Entrar />
  //     )
  //   }
  // })
 
    // if(user === null){
    //   return (
    //     <Login onReciveGoogle={actionLoginGoogle}/>
    //   )
    // }
 


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
