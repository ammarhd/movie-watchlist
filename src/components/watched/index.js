import React from "react";
import "../watchList/watchList.css";
import trash from "../images/trash.png";

const Watched = () => {
  const watchedMovies = [];
  const backToWatchlist = (movie, movieId) => {};
  const remove = (movieId) => {};
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-start m-2 ">
        {watchedMovies.map((movie) => (
          <div
            key={movie.id}
            className=" image-container d-flex justify-content-start m-3 border border-dark rounded"
          >
            <div>
              <img
                src={movie.image}
                onError={(e) => {
                  e.target.onError = null;
                  e.target.src =
                    "https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-010-winter-neva.png";
                }}
                className="imgSize rounded"
                alt="movie"
              ></img>
            </div>

            <div className="overlay d-flex align-items-center justify-content-center ">
              <div className="row">
                <div className="title r col-12">{movie.title}</div>

                <div className="comment col-12">
                  <p>{movie.comment}</p>
                </div>
                <div className="watched-remove col-12">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                      backToWatchlist(movie, movie.id);
                    }}
                  >
                    To watchlist
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger ml-2"
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
