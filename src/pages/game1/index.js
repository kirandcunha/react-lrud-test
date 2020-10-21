import React from "react";
import {withRouter} from "react-router";
import KEYS from "../../constants/keys";

class Game1 extends React.Component {
  constructor(props) {
    super(props);
    this._onKeyDown = this.onKeyDown.bind(this);
  }

  onKeyDown(event) {
    switch (event.keyCode) {
      case KEYS.BACK:
        this.props.history.goBack();
        break;
      default:
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this._onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this._onKeyDown);
  }

  render() {
    return <div>Game 1</div>;
  }
}

export default withRouter(Game1);
