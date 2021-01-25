import { v4 } from "node-uuid";
const INITIAL_STATE = {
  Watchlist: [
    {
      title: "The Avengers",
      image:
        "http://d21lz9b0v8r1zn.cloudfront.net/wp-content/uploads//2012/03/detail.jpg",
      comment: "New York blows up in this!",
      id: v4(),
    },
    {
      title: "Dark City",
      image: "https://i.chzbgr.com/full/5569379584/hA96709E0/",
      comment: "This looks mysterious. Cool!",
      id: v4(),
    },
    {
      title: "Hot Tub Time Machine",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51VBlRGkcPL._AC_.jpg",
      comment: "Someone said this was fun. Maybe!",
      id: v4(),
    },
  ],
};

const WatchlistMoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        Watchlist: [action.payload, ...state.Watchlist],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        Watchlist: [
          ...state.Watchlist.filter((movie) => movie.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default WatchlistMoviesReducer;
