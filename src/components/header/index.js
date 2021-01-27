import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [watchListButton, setWatchListButton] = useState("primary");
  const [watchedButton, setWatchedButton] = useState("default");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const watchListClicked = () => {
    setWatchListButton((prevColor) => "primary");
    setWatchedButton((prevColor) => "default");
  };
  const watchedClicked = () => {
    setWatchedButton((prevColor) => "primary");
    setWatchListButton((prevColor) => "default");
  };
  return (
    <div className="container  align-items-center">
      <div className=" row mt-4 mb-4">
        <div className="col-4">
          <Link to="/" className="header a">
            <h1>My WatchList</h1>
          </Link>
        </div>

        <div className="col-6 mt-2">
          <span>
            <Link to="/" className="a">
              <Button
                variant="contained"
                color={watchListButton}
                onClick={watchListClicked}
                className="Btn"
              >
                WatchList
              </Button>
            </Link>
          </span>
          <span>
            <Link to="/Watched" className="a">
              <Button
                variant="contained"
                color={watchedButton}
                onClick={watchedClicked}
                className="Btn"
              >
                Watched
              </Button>
            </Link>
          </span>
        </div>

        <div className="col-2 mt-1">
          <Button variant="contained" color="secondary" onClick={togglePopup}>
            + ADD
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
