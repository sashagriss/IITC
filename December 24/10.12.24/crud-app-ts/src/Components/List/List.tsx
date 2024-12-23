import { useEffect } from "react"
import api from "../../api"
import {TASK} from "../../App.tsx"

interface ListTasksProps {
    list: TASK[];
    setList: React.Dispatch<React.SetStateAction<TASK[]>>;
  }

const List :React.FC<ListTasksProps> = ({list,setList}) => {
  
    const fetchData = async ()=>{
        try{
            const {data} = await api.get("/tasks")

        }
        catch(error) {
            console.error("Error fetching tasks:", error);
        }
    }
        useEffect(()=>{
            fetchData()
        },[])

  return (
    <div>
        <ul>
           {list.map((task)=>{
            return(
                <li key={task.id}>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <button>Update</button>
                    <button>Delete</button>
                </li>
            )
           })}
        </ul>
    </div>
  )
}

export default List