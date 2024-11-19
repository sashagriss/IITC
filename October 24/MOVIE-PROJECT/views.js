// import { model } from "./models.js";
import { utils } from "./utils.js";
import { secret } from "./secret.js";

const gMovies = utils.getFromStorage(secret.KEY_STORAGE);

// a function that clears the content in order to hide elements while showing another ones instead
const clearTextContent = (element) => {
  Array.from(element.children).forEach((child) => {
    clearTextContent(child);
    child.textContent = "";
  });
};
const elPage2 = document.querySelector(".movie-details-page");

// rendering home pgae
const renderPopularMovies = (movies) => {
  elPage2.classList.add("hide-page2");
  const elUl = document.getElementById("movie-container");

  elUl.innerHTML = "";

  // creating new elements
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

    // limit the words in description to prevent overflow
    const truncateOverview = (text, wordLimit) => {
      const words = text.split(" ");
      if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + "...";
      }
      return text;
    };
    const elDescription = document.createElement("p");
    elDescription.textContent = truncateOverview(movie.overview, 60);
    elDescription.classList.add("description");

    const elFavorite = document.createElement("div");
    elFavorite.classList.add("favorite");
    elFavorite.setAttribute("id", movie.id);

    // checking fav to show the appropriate icon
    const isFavorite = gMovies.some((fav) => fav.id === movie.id);
    elFavorite.innerHTML = isFavorite
      ? "Remove from &#x1F5A4;"
      : "Add to &#x2661";

    // appending elements
    elUl.appendChild(elLi);
    elContainer.appendChild(elCard);
    elContainer.appendChild(elTitle);
    elCard.appendChild(elPoster);
    elCard.appendChild(elDescription);
    elDescription.appendChild(elFavorite);
  });
};

// search movie by input name
const searchMovieByName = (input, movies) => {
  return movies().then((response) => {
    const filteredData = response.filter((movie) =>
      movie.title.toLowerCase().startsWith(input.toLowerCase())
    );
    return filteredData;
  });
};

// showing the details of a specific movie
const renderMovieDetails = (movie) => {
  elPage2.classList.remove("hide-page2");
  const elHomePage = document.querySelector(".home-page");
  clearTextContent(elHomePage);

  // only year release
  const dateMovie = new Date(movie.release_date);
  const year = dateMovie.getFullYear();

  // find the director of movie
  const director = movie.credits.crew.find((person) => {
    return person.job === "Director";
  });

  // round the rating:
  const roundedRating = (voteAverage) => {
    return (Math.round(voteAverage * 10) / 10).toFixed(1);
  };
  const movieRating = roundedRating(movie.vote_average);

  // creating var of bg img
  const backdropPath = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    : "fallback-image-url.jpg";

  const elImgBkg = document.querySelector(".bkg-img");

  elImgBkg.src = backdropPath;
  elImgBkg.alt = movie.title;

  const elImgContainer = document.querySelector(".img-container");
  elImgContainer.innerHTML = ` <img class="img-page2"src=" https://image.tmdb.org/t/p/w500${
    movie.poster_path
  } " alt="${movie.title}">
  <div class="favorite detail-page-too" id="${movie.id}">
      ${
        views.gMovies.some((fav) => fav.id === movie.id)
          ? "Remove from &#x1F5A4;"
          : "Add to &#x2661;"
      }
    </div>
  `;
  const elDescription = document.querySelector(".description-container");
  elDescription.innerHTML = `
  <h3 class="title-page2">${movie.title || "No title"}</h3>
  <h4 class="date-release">(${year || "No Year"})</h4>
  <p class="genres"><span class="title-of-details">Genres:</span> ${
    movie.genres.length > 0
      ? movie.genres.map((genre) => genre.name).join(", ")
      : "No genres available"
  }</p>
  <p class="runtime">${movie.runtime || "No information"} min</p>
  <p class="language"><span class="title-of-details">Language:</span> ${
    movie.spoken_languages[0].name || "No information"
  } </p>
  <p class="rating"> <span class="title-of-details">Rating:</span> ${
    movieRating || "No information"
  }</p>
  <p class="tagline">${movie.tagline || "No director"}</p>
  <p class="overview">${movie.overview || "No description"}</p>
  <p class="crew"><span class="title-of-details">Directed by:</span> ${
    director.name || "No director"
  }</p>
  `;
  const elCastContainer = document.querySelector(".cast-container");
  clearTextContent(elCastContainer);
  const visibleActors = movie.credits.cast;
  visibleActors.forEach((person) => {
    const elCastCard = document.createElement("div");
    elCastCard.classList.add("one-card");

    const elCastImg = document.createElement("img");
    elCastImg.classList.add("cast-img");

    const elCastName = document.createElement("p");
    elCastName.classList.add("cast-name");

    const elCastChar = document.createElement("p");
    elCastChar.classList.add("cast-character");

    elCastName.textContent = person.name;
    elCastChar.textContent = person.character;
    elCastImg.src = `https://image.tmdb.org/t/p/w500${person.profile_path}`;
    elCastImg.alt = `${person.name} photo`;
    elCastImg.onerror = () => {
      elCastImg.src = `./assets/kindpng_4296037.png
`;
    };
    elCastContainer.appendChild(elCastCard);
    elCastCard.appendChild(elCastImg);
    elCastCard.appendChild(elCastName);
    elCastCard.appendChild(elCastChar);
  });
};

export const views = {
  renderPopularMovies,
  searchMovieByName,
  renderMovieDetails,
  gMovies,
};
