const myKey = "0137a577e6333083ae7db81b501025d6";
fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=32.0853&lon=34.7818&appid=${myKey}`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    // playWithData(data);
  })
  .catch((error) => console.error("Error:", error));
