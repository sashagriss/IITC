import { model } from "./models.js";
import { secret } from "./secret.js";
import { views } from "./views.js";

let data;
const elSearchInput = document.getElementById("input-search");
const elSearchBtn = document.getElementById("btn-search");
const elSearchIdBtn = document.getElementById("btn-searchId");
const elSpanSearch = document.querySelector(".span-search");
const elSearchInputID = document.getElementById("input-byId");

const elTrending = document.querySelector(".trending-h4");

const elSelect = document.getElementById("select");

elSelect.addEventListener("change", (ev) => {
  if (ev.target.value === "week") {
    model.updateCurrentUrl(model.byWeek);
    elTrending.textContent = "Trending of the week";
  } else if (ev.target.value === "day") {
    model.updateCurrentUrl(model.byDay);
    elTrending.textContent = "Trending of the day";
  } else {
    model.updateCurrentUrl(model.allPopular);
    elTrending.textContent = "All popular movies";
  }
  model
    .getPopularMovies()
    .then((response) => views.renderPopularMovies(response));
});

model
  .getPopularMovies()
  .then((response) => views.renderPopularMovies(response))
  .then(() => getAllLiMovies());

elSearchInput.addEventListener("input", () => {
  data = views.searchMovieByName(elSearchInput.value, model.getPopularMovies);
  views
    .searchMovieByName(elSearchInput.value, model.getPopularMovies)
    .then((response) => views.renderPopularMovies(response));
});

elSearchBtn.addEventListener("click", () => {
  if (!data) {
    location.reload();
  } else {
    data.then((response) => {
      if (response.length === 0) {
        elTrending.textContent = "Movie not found :(";
      }
    });
  }
  elSearchInput.value = "";
});

elSearchIdBtn.addEventListener("click", () => {
  elSpanSearch.classList.add("hidden");
  elSearchInputID.classList.remove("hidden");
  if (elSearchInputID.value === "") {
    return;
  }
  model.getMovieById(elSearchInputID.value).then((response) => {
    if (!response) {
      elTrending.textContent = "Movie not found :(";
    }
    views.renderPopularMovies([response]);
  });
});

const getAllLiMovies = () => {
  const elAllLiMovies = document.querySelectorAll(".each-movie");

  elAllLiMovies.forEach((item) => {
    item.addEventListener("click", () => {
      model
        .getMovieDetails(item.id)
        .then((response) => views.renderMovieDetails(response));
    });
  });
};
