import WatchlistMoviesReducer from "./WatchlistMovies";
import WatchedMoviesReducer from "./WatchedMovies";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["watchlistMovies", "watchedMovies"],
};

const rootReducers = combineReducers({
  watchlistMovies: WatchlistMoviesReducer,
  watchedMovies: WatchedMoviesReducer,
});

export default persistReducer(persistConfig, rootReducers);
