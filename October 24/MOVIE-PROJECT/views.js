// import { model } from "./models.js";

const renderPopulaMovies = (movies) => {
  const elUl = document.getElementById("movie-container");
  elUl.innerHTML = "";
  console.log(movies);
  movies.forEach((movie) => {
    console.log(movie);
    const elLi = document.createElement("li");
    elLi.classList.add("each-movie");
    const elCard = document.createElement("div");
    elCard.classList.add("card");
    const elTitle = document.createElement("h3");
    elTitle.classList.add("title");
    elTitle.textContent = movie.title;
    elLi.appendChild(elCard);

    const elPoster = document.createElement("img");
    elPoster.classList.add("poster");
    elPoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    elPoster.alt = movie.title;
    const elDescription = document.createElement("p");
    elDescription.textContent = movie.overview;
    elDescription.classList.add("description");

    elLi.appendChild(elTitle);
    elCard.appendChild(elPoster);
    elCard.appendChild(elDescription);
    elUl.appendChild(elLi);
  });
};

export const views = {
  renderPopulaMovies,
};
