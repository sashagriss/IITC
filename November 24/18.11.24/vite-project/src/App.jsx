import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// ImportComponents
// import Button from './components/Button'
// import Card from './components/Card'
import Modal from './components/Modal'
// import Pokemon from './components/Pokemon'

function App() {
  // const [count, setCount] = useState(0)
  const [isOpen,setUsOpen] = useState(false)
  return (
    <>
      <div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      {/* <h1>Vite + React</h1> */}
      <div className="card">
     {/* <Button setCount={setCount}> 
     <span>count is {count}</span>
     </Button>
      <Card >
        <h1>Home</h1>
        <p>AAAAAAAAAA</p>
      </Card> */}
      <Modal isOpen={isOpen} setUsOpen={setUsOpen}>
       <p>I walk home</p>
      </Modal>
      </div>
    </>
  )
}

export default App
