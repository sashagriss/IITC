import { model } from "./models.js";
import { views } from "./views.js";
model.getPopularMovies().then((response) => views.renderPopulaMovies(response));
