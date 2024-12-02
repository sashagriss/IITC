import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'

// Import Pages
import Home from "./Pages/Home/Home.jsx"
import About from "./Pages/About/About.jsx"
import Dashboard from "./Pages/Dashboard/Dashboard.jsx"

import Articles from "./Pages/Articles/Articles.jsx"
// Nested Articles
import Tech from "./Pages/Articles/Tech/Tech.jsx"

// Import Components
import NavBar from "./Components/NavBar/NavBar.jsx"
 
function App() {

  return (
    <>
      <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/articles" element={<Articles/>}> 
          <Route path="news" element={<h1>'News'</h1>}/>
          <Route path="politics" element={<h1>'Politics'</h1>}/>
          <Route path="tech/:id" element={<Tech/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
