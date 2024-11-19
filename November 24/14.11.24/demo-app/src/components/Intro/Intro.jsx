import './Intro.css'
import React from 'react'
import img from "../../recipe-page-main 2/assets/images/image-omelette.jpeg"

const Intro = ()=>{
return(
<div className='intro'>
<img src={img}></img>
<h1>Simple Omelette Recipe</h1>
<p className="text">
        An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
        to perfection, optionally filled with your choice of cheese, vegetables, or meats.
      </p>
</div>
)
}

export default Intro