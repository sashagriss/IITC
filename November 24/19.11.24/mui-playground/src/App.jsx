import { useState } from 'react'
import './App.css'

// Mui imports
import Texfield from "@mui/material"

const dummy_users = [
  {fullName: "baba", url: "https://images.app.goo.gl/nQJqUKkE5HWkm7xg6"},
   { fullName: "gaga", url: ""}

]
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
{dummy_users.map((user)=>{
  return <div key ={user.id}>
    
  </div>
})}
      </div>
     
      
    </>
  )
}

export default App
