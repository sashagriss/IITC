import "./Recipe.css"
import React from "react";

// Import components
import Nutrition from "../Nutrition/Nutrition";
import Ingridients from "../Ingridients/Ingridients";
import Instruction from "../Instruction.jsx/Instruction";

const Recipe = ()=>{
    return (
        <div className="recipe">
        <Ingridients/>
        <Instruction/>
        <Nutrition/>
        </div>
    )
}
export default Recipe