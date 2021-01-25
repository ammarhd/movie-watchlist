const INITIAL_STATE = {
  Watched: [], //{ Title: "harry potter", Url: "nknknkn", Comment: "I love it" }
};

const WatchedMoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        Watched: [action.payload, ...state.Watched],
      };
    case "REMOVE_MOVIE_FROM_WATCHED":
      return {
        Watched: [
          ...state.Watched.filter((movie) => movie.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default WatchedMoviesReducer;
