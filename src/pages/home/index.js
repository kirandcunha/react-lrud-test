import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/button";

class Home extends React.Component {
  constuctor() {
    this.onSelected = this.onSelected.bind(this)
  }
  onSelected(event, button) {
    console.log("onSelected")
    // TODO need to get button relevant data to see what was clicked
    // TODO route to the relevant game based on button
    // this.props.history.push(button.props.link)
  }
  render() {
    return (
      <div className="Game-list">
        <Button onSelected={this.onSelected} text="Game 1" link="game1" />
        <Button onSelected={this.onSelected} text="Game 2" link="game2" />
        <Button onSelected={this.onSelected} text="Game 3" link="game3" />
        <Button onSelected={this.onSelected} text="Game 4" link="game4" />
      </div>
    );
  }
}

export default Home;
