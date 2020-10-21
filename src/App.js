import React from "react";
import {FocusRoot} from "@please/lrud";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./pages/home";
import Game1 from "./pages/game1";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <FocusRoot>
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/game1">
              <Game1 />
            </Route>
          </Switch>
        </Router>
      </FocusRoot>
    );
  }
}
export default App;
