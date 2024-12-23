import { useRef } from "react"
import api from "../../api"
import {RECIPE} from "../../App.tsx"


interface ListRecipesProps {
  // list: RECIPE[];
  setList: React.Dispatch<React.SetStateAction<RECIPE[]>>;
}

const AddRecipe :React.FC<ListRecipesProps> = ({setList}) => {
  
   const inputTitle = useRef <HTMLInputElement>(null)
   const inputDescription = useRef <HTMLInputElement>(null)
   const inputIngredients= useRef <HTMLInputElement>(null)
   const inputInstructions= useRef <HTMLInputElement>(null)
   const inputCategory = useRef <HTMLSelectElement>(null)

   


   const handleAddRecipe= async(ev:React.FormEvent)=>{
      ev.preventDefault()
      const newRecipe = {
      title: inputTitle.current?.value || "",
      description: inputDescription.current?.value || "",
      ingredients:(inputIngredients.current?.value || ""),
      instructions: inputInstructions.current?.value || "",
      category: inputCategory.current?.value || "breakfast",
        }
        const {data} = await api.post("/recipes",newRecipe)
        setList((prev)=>[...prev,data])
  
        if (inputTitle.current) inputTitle.current.value = "";
        if (inputDescription.current) inputDescription.current.value = "";
        if (inputIngredients.current) inputIngredients.current.value = "";
        if (inputInstructions.current) inputInstructions.current.value = "";
        if (inputCategory.current) inputCategory.current.value = "breakfast";
   }

   return (
    <div>
        <form 
        className="flex flex-col p-4 bg-[#341539] round"
         onSubmit={(ev)=>{handleAddRecipe(ev)}}>
            <input ref={inputTitle} type="text" placeholder="title" />
            <input ref={inputDescription }type="text" placeholder="description"/>
            <input ref={inputIngredients} type="text" placeholder="ingredients"/>
            <input ref={inputInstructions} type="text" placeholder="instructions"/>
            <select
            ref={inputCategory}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
        <button className="bg-black text-white">Create</button>
        </form>
    </div>
  )
}

export default AddRecipe





