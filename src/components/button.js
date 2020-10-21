import React from "react";
import {FocusNode} from "@please/lrud";
class Button extends React.Component {
  onSelected(event) {
    this.props.onSelected(event, this)
  }
  render() {
    return (
      <FocusNode onSelected={this.props.onSelected} className="Game-button">
        {this.props.text}
      </FocusNode>
    );
  }
}

export default Button;
