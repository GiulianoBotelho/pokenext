import React from 'react'
import Main from '@/app/components/main.js'
import '../../../public/styles/globals.css'
import Image from 'next/image';
import '../../../public/styles/pokemon.css'
export async function getServerSideProps(context){
 const id = context.params.id;
 const res = await fetch(`https://pokeapi.co/api//v2/pokemon/${id}`)
 const pokemon = await res.json()

 return{
  props:{pokemon},
 }
}


export default function Pokemon({pokemon}) {
  return (
   <>
    <Main>
      <article>
      <h1>{pokemon.name}</h1>
      <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} width={150} height={150} alt={pokemon.name} />
      </article>
     </Main>
   </>
  )
}

//https://pokeapi.co/api//v2/pokemon/${id}