import { useState } from 'react'
import './App.css'
import PokDetails from './components/PokDetails/PokDetails'

// Import components
import Header from './components/Header/Header'
import Main from './components/Main/Main' 


function App() {
  const [clickedPok, setClickedPok] = useState(null)
  return (
    <div className='App'>
 {    !clickedPok?(
  
   <>
   <Header/>
    <Main setClickedPok={setClickedPok}/>
   </>
 ):(
    <PokDetails clickedPok={clickedPok} setClickedPok={setClickedPok}/>)}
   </div>
  )
}

export default App
