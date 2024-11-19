import { model } from "./models.js";
import { views } from "./views.js";

// Global var for
let data;

// at the beginning movies are not fav
let isFavorite = false;

// getting elements
const elSearchInput = document.getElementById("input-search");
const elSearchBtn = document.getElementById("btn-search");
const elSearchIdBtn = document.getElementById("btn-searchId");
const elSpanSearch = document.querySelector(".span-search");
const elSearchInputID = document.getElementById("input-byId");

const elTrending = document.querySelector(".trending-h4");

const elSelect = document.getElementById("select");

const elPageFav = document.querySelector(".fav-div");

const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

// showing the fav page while clicking on favorite button
elPageFav.addEventListener("click", () => {
  isFavorite = true;
  views.renderPopularMovies(views.gMovies);
  addToFav();
  getAllLiMovies();
  elTrending.textContent = "Favorite list";
});

// swiching pages depending on selection
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
    .then((response) => views.renderPopularMovies(response))
    .then(() => {
      getAllLiMovies();
    })
    .then(() => {
      addToFav();
    });
});

model
  .getPopularMovies()
  .then((response) => views.renderPopularMovies(response))
  .then(() => getAllLiMovies())
  .then(() => addToFav());

// handling the functions of searching movies while user inputs chars
elSearchInput.addEventListener("input", () => {
  let curData;
  if (isFavorite) {
    curData = () => Promise.resolve(views.gMovies);
  } else {
    curData = model.getPopularMovies;
  }
  data = views.searchMovieByName(elSearchInput.value, model.getPopularMovies);
  views
    .searchMovieByName(elSearchInput.value, curData)
    .then((response) => views.renderPopularMovies(response));
});

// most of the searching process is on the input, in order not to repeat the code btn does minor functions
elSearchBtn.addEventListener("click", () => {
  if (!data) {
    alert("Please enter something");
    location.reload();
  } else {
    data.then((response) => {
      if (response.length === 0) {
        elTrending.textContent = "Movie not found :(";
      }
    });
  }
  elSearchInput.value = "";
  data = "";
});

//  handling function SearchById
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
      model.getMovieDetails(item.id).then((response) => {
        views.renderMovieDetails(response);
        addToFav();
      });
    });
  });
};

// Handling function of saving to local storage
const addToFav = () => {
  const elFavorites = document.querySelectorAll(".favorite");

  elFavorites.forEach((item) => {
    item.addEventListener("click", (event) => {
      // New - preventing parent reaction while clicking the child
      event.stopPropagation();
      model.filterAndSaveToLocalStorage(item.id, item);
    });
  });
};

// toggling the nav menu (mobile)
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});
