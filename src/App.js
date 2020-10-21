import React from "react";
import {FocusRoot} from "@please/lrud";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/home";
import Game1 from "./pages/game1";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <FocusRoot>
        <Router>
          <Switch>
            <Route path="/game1">
              <Game1 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </FocusRoot>
    );
  }
}
export default App;
