import React from "react";
import "../watchList/watchList.css";
import trash from "../images/trash.png";
import { useSelector, useDispatch } from "react-redux";
import { addMovieToWatchlist } from "../../redux/actions";
import { removeMovieFromWatched } from "../../redux/actions";

const Watched = () => {
  const watchedMovies = useSelector((state) => state.watchedMovies);
  const dispatch = useDispatch();

  const backToWatchlist = (movie, movieId) => {
    dispatch(addMovieToWatchlist(movie));
    dispatch(removeMovieFromWatched(movieId));
  };
  const remove = (movieId) => {
    dispatch(removeMovieFromWatched(movieId));
  };
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-start m-2 ">
        {watchedMovies.Watched.map((movie) => (
          <div
            key={movie.id}
            className=" image-container d-flex justify-content-start m-3 border border-dark rounded"
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
                <div className="title r col-12">{movie.title}</div>

                <div className="comment col-12">
                  <p>{movie.comment}</p>
                </div>
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-success  m-2"
                    onClick={() => {
                      backToWatchlist(movie, movie.id);
                    }}
                  >
                    Watchlist
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger m-2"
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

export default Watched;
