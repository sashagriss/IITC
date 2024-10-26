import { model } from "./model.js";
import { view } from "./view.js";

const elInputSearch = document.getElementById("city-input");
const elBtnSearch = document.getElementById("search-btn");

elBtnSearch.addEventListener("click",()=>{
const city = elInputSearch.value
if (city) {
     .then((res)=>model.getWeatherData(res))
     view.renderWeather()
}

})
