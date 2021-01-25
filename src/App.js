import React from "react";
import "./App.css";
import "./components/components.css";
import WatchList from "./components/watchList";
import Header from "./components/header";
import Watched from "./components/watched";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/">
            <WatchList />
          </Route>
          <Route path="/Watched">
            <Watched />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
