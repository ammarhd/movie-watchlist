export const addMovieToWatchlist = (movie) => {
  return {
    type: "ADD_MOVIE_TO_WATCHLIST",
    payload: movie,
  };
};

export const removeMovieFromWatchlist = (movieId) => {
  return {
    type: "REMOVE_MOVIE_FROM_WATCHLIST",
    payload: movieId,
  };
};

export const addMovieToWatched = (movie) => {
  return {
    type: "ADD_MOVIE_TO_WATCHED",
    payload: movie,
  };
};

export const removeMovieFromWatched = (movieId) => {
  return {
    type: "REMOVE_MOVIE_FROM_WATCHED",
    payload: movieId,
  };
};
