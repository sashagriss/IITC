import { secret } from "./secret.js";
import { utils } from "./utils.js";
import { views } from "./views.js";
const allPopular = "/movie/popular?";
const byWeek = "/trending/movie/week?";
const byDay = "/trending/movie/day?";

let currentUrl = allPopular;

// updating the url depending on a chose of user
const updateCurrentUrl = (url) => {
  currentUrl = url;
};

// get API of popular movies
const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      secret.BASE_URL + currentUrl + secret.API_KEY
    );
    const movies = response.data.results;
    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
getPopularMovies();

// get API of popular movies by id
const getMovieById = async (id) => {
  try {
    const response = await axios.get(
      `https:api.themoviedb.org/3/movie/${id}?${secret.API_KEY}`
    );
    const movie = response.data;

    return movie;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

// get API of details of  movie by id
function getMovieDetails(movieId) {
  return axios
    .get(
      `${secret.BASE_URL}/movie/${movieId}?${secret.API_KEY}&append_to_response=credits`
    )
    .then((response) => {
      return response.data;
    })

    .catch((error) => {
      console.error("Error fetching movie by ID:", error);
      throw error;
    });
}

// saving to local storage in order to be able to save to fav
const filterAndSaveToLocalStorage = (id, item) => {
  model.getPopularMovies().then((res) => {
    const checkIfExists = views.gMovies.some((movie) => {
      return movie.id === Number(id);
    });
    if (checkIfExists) {
      item.innerHTML = "Add to &#x2661";
      removeFromFav(id);

      return;
    } else {
      const filteredMovies = res.filter((movie) => movie.id === Number(id));
      views.gMovies.push(...filteredMovies);
      item.innerHTML = "Remove from &#x1F5A4;";
      utils.saveToStorage(secret.KEY_STORAGE, views.gMovies);
    }
  });
};

// removing from fav
const removeFromFav = (id) => {
  views.gMovies = views.gMovies.filter((movie) => {
    return movie.id !== Number(id);
  });
  utils.saveToStorage(secret.KEY_STORAGE, views.gMovies);
};

export const model = {
  getPopularMovies,
  updateCurrentUrl,
  byWeek,
  byDay,
  allPopular,
  getMovieById,
  getMovieDetails,
  filterAndSaveToLocalStorage,
  removeFromFav,
};
