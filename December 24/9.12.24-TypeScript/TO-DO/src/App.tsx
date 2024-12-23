import { useEffect, useRef, useState } from 'react'
import './App.css'

interface TODO {
  id:string
  text:string
  completed: boolean
  description?:string
}


function App() {
  const [todoList,setTodolist]=useState<TODO[]>([])
  const [filterTodoList,setFilterTodoList]=useState<TODO[]>([])
  const [filter, setFilter] = useState<string>("all");
  const inputRef = useRef <HTMLInputElement>(null)
  const [isCompleted,setIsCompleted]=useState (false)
  
const handleAdd = ()=>{
  if (!inputRef.current?.value) return;
  
const newTodo = {
  id:inputRef.current?.value,
  text:inputRef.current?.value,
  completed:false
}
setTodolist((prev)=>[...prev, newTodo])

inputRef.current.value="" 
}
const toggleTask=(id: string)=>{
  setIsCompleted((prev)=>
    prev.map((todo) =>
   (!todo)))

}
const deleteTask= (id: string)=>{
  setTodolist((prev) => prev.filter((task) => task.id !== id));
}

useEffect(() => {
  if (filter === "all") {
    setFilterTodoList(todoList); // Show all tasks
  } else if (filter === "active") {
    setFilterTodoList(todoList.filter((toDo) => !toDo.completed)); // Show only active (incomplete) tasks
  } else if (filter === "completed") {
    setFilterTodoList(todoList.filter((toDo) => toDo.completed)); // Show only completed tasks
  }
}, [filter, todoList]);
  return (
  
      <div>
        <h1>To Do List</h1>
        <div>
       
      </div>
        <input ref={inputRef}type="text" placeholder='add ToDo' />
        <button onClick={handleAdd}> Add</button>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value as "all" | "active" | "completed")}
        >
          <option value="all">All Todos</option>
          <option value="active">Active Todos</option>
          <option value="completed">Completed Todos</option>
        </select>
        <ul>
          {todoList.map((todo)=>{
            return <li className={isCompleted?"done":""} 
            onClick={()=>{toggleTask(todo.id)}}
             key={todo.id}>{todo.text}
              <button 
              onClick={()=>{deleteTask(todo.id)}}
              >Delete</button></li>

          })}
        </ul>
      </div>
 


  )
}

export default App


  
  
  