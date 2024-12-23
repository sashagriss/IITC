import { useRef } from "react"
import api from "../../api"

import {TASK} from "../../App.tsx"

interface ListTasksProps {
    setList: React.Dispatch<React.SetStateAction<TASK[]>>;
  }

const AddTask :React.FC<ListTasksProps> = ({setList}) => {
 const inputTitle = useRef <HTMLInputElement>(null)
 const inputDescription = useRef <HTMLInputElement>(null)
 const inputDate= useRef <HTMLInputElement>(null)
 const inputPriority = useRef <HTMLSelectElement>(null)
 const inputStatus = useRef <HTMLSelectElement>(null)


 const handleAddTask= async(ev:React.FormEvent)=>{
    ev.preventDefault()
    const newTask = {
    title: inputTitle.current?.value || "",
    description: inputDescription.current?.value || "",
    date: new Date(inputDate.current?.value || ""),
    priority: inputPriority.current?.value || "low",
    status: inputStatus.current?.value || "pending",
      }
      const {data} = await api.post("/tasks",newTask)
      setList((prev)=>[...prev,data])

      if (inputTitle.current) inputTitle.current.value = "";
      if (inputDescription.current) inputDescription.current.value = "";
      if (inputDate.current) inputDate.current.value = "";
      if (inputPriority.current) inputPriority.current.value = "low";
      if (inputStatus.current) inputStatus.current.value = "pending";
 }
  return (
    <div>
        <form  onSubmit={(ev)=>{handleAddTask(ev)}}>
            <input ref={inputTitle} type="text" placeholder="title" />
            <input ref={inputDescription }type="text" placeholder="description"/>
            <input ref={inputDate} type="date" />
            <select
            ref={inputPriority}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
            <select
            ref={inputStatus}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button>Add</button>
        </form>
    </div>
  )
}

export default AddTask