import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Header() {
  return (
    <header>
      <section>
      <h1>POKE<span style={{color:'red'}}>NEXT</span></h1>
     <Image src={'/images/pokeball.png'} width={40} height={40} alt='pokeball' />
     </section>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/Sobre'>Sobre</Link></li>
        </ul>

    </header>
  )
}
