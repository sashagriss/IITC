import './Nutrition.css'
import React from 'react'

const Nutrition = ()=>{
return(
    <div class="lines">
    <h2 class="header-style">Nutrition</h2>
    <p>The table below shows nutritional values per serving without the additional fillings.</p>
    <div class="table">
      <div class="nutrition-table">
        <div>Calories</div>
        <div>277kcal</div>
      </div>
     <div class="nutrition-table">
        <div>Carbs</div>
        <div>0g</div>
     </div>
     <div class="nutrition-table">
       <div>Protein</div>
       <div>20g</div>
     </div>
      <div class="nutrition-table">
        <div>Fat</div>
        <div>22g</div>
      </div>
    </div>
  </div>
)
}

export default Nutrition