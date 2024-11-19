import img from "./img/icon-star.svg" 
const FormComp = (props)=>{
    const updateNum = (ev)=>{
       props.setUserChoice(ev.target.innerText)  
    }
    const Submit = ()=>{
        props.userChoice >= 1?
       props.setIsSubmit(true) : props.setIsSubmit(false)
    }
// const stayOnPage = ()=>{
//     props.setIsSubmit(false),
//     alert("baba, come back")
// }
return (
    <div className="form">
           <img className="star" src={img}/>
           <h1>How did we do?</h1>
         <p className="text">
            Please let us know how we did with your support request. All feedback is appreciated
            to help us improve our offering!
        </p>
          <div class="rating-nums">
          <button onClick={updateNum}>1</button>
          <button onClick={updateNum}>2</button>
          <button onClick={updateNum}>3</button>
          <button onClick={updateNum}>4</button>
          <button onClick={updateNum}>5</button>
        </div>
        <button onClick={Submit}>S U B M I T</button>
    </div>
)
}
export default FormComp