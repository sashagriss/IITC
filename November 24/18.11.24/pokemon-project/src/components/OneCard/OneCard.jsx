import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./OneCard.module.css"


function OneCard(props) {
const[eachPok,setEachPok]= useState(null)
    const fetchDetails = async ()=>{
        try{
            const {data} = await axios.get(props.url)
       setEachPok(data)
            console.log(data); 
        }
        catch(error){
    console.error(error)
        }
    }
    useEffect(()=>{
        fetchDetails()
    },[])
  return (
    eachPok&& <li className={styles.oneCard} onClick={()=>{
        props.setClickedPok(eachPok)
    }}>
<div className="card-container">
    <h2 className="name">{eachPok.name}</h2>
    <p className="abilities"></p>
    <img src={eachPok.sprites.front_default} alt="?" />
</div>
        </li>
  )
}

export default OneCard