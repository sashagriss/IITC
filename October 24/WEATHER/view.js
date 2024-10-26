const changeBackgroundColor = () => {
  const elArticle = document.querySelector(".article");
  let currentHour = new Date().getHours();

  let bgColor;
  if (currentHour >= 5 && currentHour < 12) {
    bgColor = "rgba(255, 223, 186, 0.8)"; // Morning (Soft Orange)
  } else if (currentHour >= 12 && currentHour < 18) {
    bgColor = "rgba(186, 235, 255, 0.8)"; // Afternoon (Light Blue)
  } else if (currentHour >= 18 && currentHour < 21) {
    bgColor = "rgba(144, 190, 255, 0.8)"; // Evening (Soft Purple-Blue)
  } else {
    bgColor = "rgba(30, 30, 60, 0.9)"; // Night (Dark Blue)
  }
  elArticle.style.backgroundColor = bgColor;
};

export const displayError = () => {
  elCityName.textContent = "City not found. Please try again.";
  elWeatherIcon.src = "";
};

const renderWeather = () => {
  changeBackgroundColor();
};

export const view = {
  renderWeather,
};
