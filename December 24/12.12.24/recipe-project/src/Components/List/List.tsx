import { useEffect } from "react"
import api from "../../api"
import { RECIPE } from "../../App.tsx"

interface ListRecipesProps {
  list: RECIPE[];
  setList: React.Dispatch<React.SetStateAction<RECIPE[]>>;
}

const List :React.FC<ListRecipesProps> = ({list,setList}) => {
  
  const fetchData = async ()=>{
      try{
          const {data} = await api.get<RECIPE[]>("/recipes")
          setList(data);
      }
      catch(error) {
          console.error("Error fetching recipes:", error);
      }
  }
      useEffect(()=>{
          fetchData()
      },[])

return (
  <div>
      <ul>
         {list.map((recipe)=>{
          return(
              <li key={recipe.id}>
                  <h2>{recipe.title}</h2>
                  <p>{recipe.description}</p>
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