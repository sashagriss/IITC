import List from "./Components/List/List.tsx"
import AddRecipe from "./Components/List/AddRecipe.tsx"
import Nav from "./Components/Nav/Nav.tsx"
import DetailPage from "./Components/Pages/DetailPage.tsx"
import HomePage from "./Components/Pages/HomePage.tsx"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import { useState } from 'react' 


export interface RECIPE {
  id:string
  title:string
  image:string
  description?:string
  ingredients:string
  instructions: string
  category: string
}

const App = () => {
  const [list,setList]=useState<RECIPE[]>([])
  return (
    <BrowserRouter>
    <div className="bg-black h-[100%] text-white">
      <div >
        <Nav/>
        <AddRecipe setList={setList}/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
            path="/recipes"
            element={<List list={list} setList={setList} />}
          />
         <Route path="/recipe/:id" element={<DetailPage />}/>
        </Routes>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default App