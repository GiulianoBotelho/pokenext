import React from 'react'
import Footer from './footer.js'
import Header from './header.js'
//estilos do meu layout
export default function Main({children}) {
  return (
   <>
    <Header/>
    <main>{children}</main>
    <Footer/>
   </>
  )
}
