import { useState } from 'react' 

import './App.css'
import  AddTask  from "./Components/AddTask/AddTask.tsx"
import  List  from "./Components/List/List.tsx"

export interface TASK {
  id:string
  title:string
  description?:string
  date:Date
  priority: string
  status: string
}

function App() {
  const [list,setList]=useState<TASK[]>([])

  return (
    <>
    <AddTask  setList={setList}/>
    <List list={list} setList={setList}/>
    </>
  )
}
export default App
