import './Instruction.css'
import React from 'react'

const Instruction = ()=>{
return(
<div className='text'>
<h2 class="header-style">Instructions</h2>
        <ol>
          <li>
            <span>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
            You can add a tablespoon of water or milk for a fluffier texture.
          </li>
          <li><span>Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.</li>
          <li>
            <span>Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
            the eggs evenly coat the surface.
          </li>
          <li>
            <span>Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the
            middle, sprinkle your chosen fillings over one half of the omelette.
          </li>
          <li>
            <span>Fold and serve: </span>As the omelette continues to cook, carefully lift one edge and fold it over the
            fillings. Let it cook for another minute, then slide it onto a plate.
          </li>
          <li><span>Enjoy:</span> Serve hot, with additional salt and pepper if needed.</li>
        </ol>
</div>
)
}

export default Instruction