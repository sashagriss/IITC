import { secret } from "./secret.js";
const allPopular = "/movie/popular?";
const byWeek = "/trending/movie/week?";
const byDay = "/trending/movie/day?";

let currentUrl = allPopular;

const updateCurrentUrl = (url) => {
  currentUrl = url;
};

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

const getMovieById = async (id) => {
  try {
    const response = await axios.get(
      `https:api.themoviedb.org/3/movie/${id}?${secret.API_KEY}`
    );
    const movie = response.data;
    console.log(movie);

    return movie;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
function getMovieDetails(movieId) {
  return axios
    .get(
      `${secret.BASE_URL}/movie/${movieId}?${secret.API_KEY}&append_to_response=credits`
    )
    .then((response) => {
      console.log("Movie details:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching movie by ID:", error);
      throw error;
    });
}

export const model = {
  getPopularMovies,
  updateCurrentUrl,
  byWeek,
  byDay,
  allPopular,
  getMovieById,
  getMovieDetails,
};
