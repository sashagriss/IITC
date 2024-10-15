import { secret } from "./secret.js";

const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${secret.BASE_URL}/movie/popular?api_key=${secret.API_KEY}`
    );

    const movies = response.data.results;
    // console.log("Popular Movies:", movies);
    return movies;
    // movies.forEach((movie) => {
    //   console.log(
    //     `Title: ${movie.title}, Release Date: ${movie.release_date}, Rating: ${movie.vote_average}`
    //   );
    // });
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

getPopularMovies();

export const model = { getPopularMovies };
