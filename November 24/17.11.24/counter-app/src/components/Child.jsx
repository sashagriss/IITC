import React from "react"
const ChildComp = (props)=> {
return (
    <div>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    </div>
)
}

export default ChildComp