import React from 'react'

const PokDetails = (props) => {
const updatePok = ()=>{
    props.setClickedPok(null)
    console.log(props.setClickedPok);
}
  return (
    <div>PokDetails
        <button onClick={updatePok}>x</button>
    </div>

  )
}

export default PokDetails