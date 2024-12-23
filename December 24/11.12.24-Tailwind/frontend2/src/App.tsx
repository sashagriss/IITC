import img from "./assets/order-summary-component-main/images/illustration-hero.svg"
import icon from "./assets/order-summary-component-main/images/icon-music.svg"

function App() {


  return (
    <>
     <div className="flex justify-center items-center h-screen">
       <div className="bg-white rounded-xl w-[350px] overflow-hidden text-center ">
        <div className="w-fit "><img  src={img} alt="?" /></div>
        <div className="m-5"> 
          <h1 className="font-bold text-lg pb-3"> Order Summary</h1>
          <p className="text-Desaturated-blue pb-4">You can now listen to millions of songs, audiobooks, and podcasts on any
              device anywhere you like!</p>
              <div className="bg-Very-pale-blue p-3 rounded-xl flex justify-between mb-4">
                <img src={icon} alt="?" />
                <div>
                  <h2>Annual Plan</h2>
                  <p className="text-Desaturated-blue">$59.99/year</p>
                </div>
                <button className="text-sm text-Bright-blue underline font-bold hover:">Change</button>
              </div>
              <div className="flex flex-col">
                <button className=" py-3 bg-Desaturated-blue rounded-lg text-white font-bold mb-2 text-m hover:bg-Bright-blue">Proceed Payment</button>
                <button className="text-Desaturated-blue font-bold text-sm">Cancel order</button>
              </div>
        </div>
       </div>
     </div>
    </>
  )
}

export default App
