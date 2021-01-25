import React from "react";
import eye from "../images/eye1.png";
import trash from "../images/trash.png";
import "./watchList.css";
import { useSelector, useDispatch } from "react-redux";
import { addMovieToWatched } from "../../redux/actions";
import { removeMovieFromWatchlist } from "../../redux/actions";

const WatchList = () => {
  const watchlistMovies = useSelector((state) => state.watchlistMovies);
  const dispatch = useDispatch();
  const addToWatched = (movie, movieId) => {
    dispatch(addMovieToWatched(movie));
    dispatch(removeMovieFromWatchlist(movieId));
  };
  const remove = (movieId) => {
    dispatch(removeMovieFromWatchlist(movieId));
  };
  return (
    <div className="container-fluid ">
      <div className=" row d-flex justify-content-start m-2 ">
        {watchlistMovies.Watchlist.map((movie, index) => (
          <div
            key={movie.id}
            className="image-container d-flex justify-content-start m-3 border  rounded "
          >
            <div>
              {movie.image.length > 0 ? (
                <img
                  src={movie.image}
                  onError={(e) => {
                    e.target.onError = null;
                    e.target.src =
                      "https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-010-winter-neva.png";
                  }}
                  className="imgSize rounded"
                  alt={movie.title}
                ></img>
              ) : (
                <div className="noImg rounded align-items-center justify-content-center">
                  {movie.title}
                </div>
              )}
            </div>

            <div className="overlay d-flex align-items-center justify-content-center ">
              <div className="row">
                <div className="title col-12">{movie.title}</div>

                <div className="comment col-12">
                  <p>{movie.comment}</p>
                </div>

                <div className=" col-12">
                  <button
                    type="button"
                    className="btn btn-success m-2"
                    onClick={() => {
                      addToWatched(movie, movie.id);
                    }}
                  >
                    <img src={eye} alt="watched" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger m-2 "
                    onClick={() => {
                      remove(movie.id);
                    }}
                  >
                    <img src={trash} alt="delete" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
