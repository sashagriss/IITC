import axios from "axios"
import { useState,useEffect } from "react"
const Pokemon = () => {

const fetchData = async ()=>{
    const [pokemons,setPokemons]= useState([])
    try{
        const {data:{results}} = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        setPokemons(results)
        console.log(results);
    }
    catch(error){
console.error(error)
    }
}
useEffect(()=>{
    fetchData()

},[])
  return (
    <div>
        <ul>
            {pokemons.map(pokemon=>{
                return <li  ></li>
            })}
        </ul>
    </div>
  )
}

export default Pokemon