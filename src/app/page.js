"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import '../../public/styles/pokelist.css'
import Link from "next/link";
//Apenas os estilos da lista
export default function Home() {
const [pokemon, setPokemon] = useState([])
const [isLoading, setIsLoading] = useState(true)

async function GetPokemonData(){
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=251&offset=0')
  const data = await response.json()
  data.results.forEach((item, index) =>{
    item.id = index + 1
    setPokemon(data.results)
    setIsLoading(false)
  })
}
useEffect(()=>{GetPokemonData()},[])
console.log(pokemon)
  return (
    <>
    <section>
      {isLoading? (<div>Carregando...</div>) : (
        <ul>
          {pokemon.map((pokes)=>
          <section className="cards"> 
          <figure className="card-image">
            <Image  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokes.id}.png`} width={180} height={180} alt={pokes.name} />
            </figure>
            <li className="pokes" key={pokes.index}>{pokes.name}
            </li>
            <Link href={`/pokemon/${pokes.id}`}> <button>Detalhes</button></Link>
            </section>

          )}
        </ul>
      )}

    </section>
    </>
  );
}
