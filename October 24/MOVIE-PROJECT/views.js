// import { model } from "./models.js";

const renderPopularMovies = (movies) => {
  const elUl = document.getElementById("movie-container");
  elUl.innerHTML = "";
  movies.forEach((movie) => {
    const elLi = document.createElement("li");
    elLi.classList.add("each-movie");
    elLi.setAttribute("id", movie.id);

    const elContainer = document.createElement("div");
    elContainer.classList.add("container");
    elLi.appendChild(elContainer);

    const elCard = document.createElement("div");
    elCard.classList.add("card");

    const elTitle = document.createElement("h3");
    elTitle.classList.add("title");
    elTitle.textContent = movie.title;

    const elPoster = document.createElement("img");
    elPoster.classList.add("poster");
    elPoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    elPoster.alt = movie.title;
    const elDescription = document.createElement("p");
    elDescription.textContent = movie.overview;
    elDescription.classList.add("description");

    elUl.appendChild(elLi);
    elContainer.appendChild(elCard);
    elContainer.appendChild(elTitle);
    elCard.appendChild(elPoster);
    elCard.appendChild(elDescription);
  });
};

const searchMovieByName = (input, movies) => {
  return movies().then((response) => {
    const filteredData = response.filter((movie) =>
      movie.title.toLowerCase().startsWith(input.toLowerCase())
    );
    return filteredData;
  });
};
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});

const renderMovieDetails = (movie) => {
  const dateMovie = new Date(movie.release_date);
  const year = dateMovie.getFullYear();
  const elHomePage = document.querySelector(".home-page");

  const director = movie.credits.crew.find((person) => {
    return person.job === "Director";
  });

  elHomePage.innerHTML = "";
  //   const elDetailPage = document.querySelector(".movie-details-page");
  //   const elDetailContainer = document.querySelector(".details-container");

  const elImgContainer = document.querySelector(".img-container");
  elImgContainer.innerHTML = ` <img class="img-page2"src=" https://image.tmdb.org/t/p/w500${movie.poster_path} " alt="${movie.title}">`;
  const elDescription = document.querySelector(".description-container");
  elDescription.innerHTML = `
  <h3 class="title-page2">${movie.title}</h3>
  <h4 class="date-release">(${year})</h4>
  <p class="genres"><span class="title-of-details">Genres:</span> ${movie.genres[0].name},${movie.genres[1].name},${movie.genres[2].name}</p>
  <p class="runtime">${movie.runtime} min</p>
  <p class="language"><span class="title-of-details">Language:</span> ${movie.spoken_languages[0].name} </p>
  <p class="rating"> <span class="title-of-details">Rating:</span> ${movie.vote_average}</p>
  <p class="tagline">${movie.tagline}</p>
  <p class="overview">${movie.overview}</p>
  <p class="crew"><span class="title-of-details">Directed by:</span> ${director.name}</p>
  `;

  const elCastContainer = document.querySelector(".cast-card");
  const elCastImg = document.querySelector(".cast-img");
  const elCastText = document.querySelector(".cast-text");
};

export const views = {
  renderPopularMovies,
  searchMovieByName,
  renderMovieDetails,
};
