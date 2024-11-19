import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [text, setText] = useState("")
  const handleInput =(e)=>{
    setText(e.target.value)
  }
  useEffect(()=>{
    console.log(text);
  })

  return (
    <>
      <form>
        <div>
          <h1>Inputs in React</h1>
          <label htmlFor="input">Type something</label>
          <input  value={text} 
          type="text"
           name='input'
            id='input' 
            onChange={handleInput} />
          <button type='submit'>Send</button>
        </div>
      </form>
    </>
  )
}

export default App
