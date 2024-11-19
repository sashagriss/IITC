import "./Head.css"
import React from "react";

// Import components
import Intro from "../Intro/Intro";
import PrepTime from "../PrepTime/PrepTime";

const Head = ()=>{
    return (
        <div className="head">

        <Intro/>
        <PrepTime/>
        </div>
    )
}
export default Head