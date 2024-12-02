import { useParams } from "react-router-dom"
const Tech = () => {
    const {id} = useParams()
    console.log(id);

  return (
    <div>Tech</div>
  )
}

export default Tech