import img from "./img/illustration-thank-you.svg" 
const ResultComp = (props)=>{

return(
    <div class="result">
          
   <img className="phone" src={img}/>
    
      <div class="raiting-span">You selected <span class="chosen-rate"> {props.userChoice}</span> out of 5</div>
    
      <h2>Thank you!</h2>
    
      <p class="thank-you">
        We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!
      </p>
  </div>
)
}

export default ResultComp