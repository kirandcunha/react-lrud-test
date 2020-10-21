import React from "react";
import {withRouter} from "react-router";
import Button from "../../components/button";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this._onSelected = this.onSelected.bind(this);
  }

  onSelected(event, button) {
    console.log("onSelected");
    this.props.history.push(button.props.to);
  }
  render() {
    return (
      <div className="Game-list">
        <Button onSelected={this._onSelected} text="Game 1" to="game1" />
        <Button onSelected={this._onSelected} text="Game 2" to="game2" />
        <Button onSelected={this._onSelected} text="Game 3" to="game3" />
        <Button onSelected={this._onSelected} text="Game 4" to="game4" />
      </div>
    );
  }
}

export default withRouter(Home);
